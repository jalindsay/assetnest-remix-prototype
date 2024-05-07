import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import Alert from '~/components/ui/Alert'
import Button from '~/components/ui/Button'
import { SelectInput } from '~/components/ui/SelectInput'
import { TextArea } from '~/components/ui/TextArea'
import { TextInput } from '~/components/ui/TextInput'
import { getOrganisation, updateOrganisation } from '~/endpoints/organisation'
import { secondaryText } from '~/styles/typography'
import type { country } from '~/utils/arrayOfAllCountries';
import { allCountries } from '~/utils/arrayOfAllCountries'

export async function action({ request, params }: ActionFunctionArgs) {
  const body = await request.formData()
  const streetAddress = body.get('streetAddress') as string
  const city = body.get('city') as string
  const country = body.get('country') as string
  const postcode = body.get('postcode') as string

  let result = null
  try {
    result = await updateOrganisation({
      userId: parseInt(params.userId ?? '-1'),
      orgId: parseInt(params.orgId ?? '-1'),
      address: streetAddress,
      city: city,
      country: country,
      postcode: postcode,
    })
  } catch (error) {
    return {
      success: false,
    }
  }

  return {
    orgId: result?.id,
    address: result?.address,
    city: result?.city,
    country: result?.country,
    postcode: result?.postcode,
    success: true,
  }
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const currentOrg = await getOrganisation(parseInt(params.orgId ?? '-1'))

  return {
    address: currentOrg?.address,
    city: currentOrg?.city,
    country: currentOrg?.country,
    postcode: currentOrg?.postcode,
  }
}

export default function Location() {
  const loaderData = useLoaderData<typeof loader>()
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()

  const [address, setAddress] = useState(loaderData?.address ?? '')
  const [city, setCity] = useState(loaderData?.city ?? '')

  const [country, setCountry] = useState<country>(
    allCountries.find((country) => country.code === loaderData.country) ?? {
      name: '',
      code: '',
    },
  )
  const [postcode, setPostcode] = useState(loaderData?.postcode ?? '')
  const [formChanged, setFormChanged] = useState(false)
  const [displaySuccessAlert, setDisplaySuccessAlert] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const listOfCountries = allCountries.map((country) => {
    return { value: country.code, valueLabel: country.name }
  })

  useEffect(() => {
    if (actionData?.success) {
      setSuccessMessage('Organisation Updated')
      setDisplaySuccessAlert(true)
      setTimeout(() => setDisplaySuccessAlert(false), 5000)
    }
  }, [actionData])

  return (
    <div className={'flex w-full flex-col space-y-1.5 p-4 '}>
      {displaySuccessAlert && (
        <Alert
          variant="success"
          title={successMessage}
          onClose={() => {
            setDisplaySuccessAlert(false)
          }}
        />
      )}
      <p className={`ps-2 ${secondaryText}`}>
        Make changes to your organisation here. Click save when you're done.
      </p>
      <div className={'md:w-96'}>
        <Form method="post" onChange={() => setFormChanged(true)}>
          <TextArea
            name="streetAddress"
            label={'Street Address'}
            value={address}
            onChange={(value) => setAddress(value)}
          />
          <TextInput
            name="city"
            label={'City'}
            value={city}
            onChange={(value) => setCity(value)}
          />
          <SelectInput
            name="country"
            label="Country"
            valueCurrent={country.code}
            onChange={(newValue) => {
              setCountry(
                allCountries.find((country) => country.code === newValue) ?? {
                  name: 'United Kingdom',
                  code: 'GB',
                },
              )
            }}
            possibleValues={listOfCountries}
          />
          <TextInput
            name="postcode"
            label={'Postcode'}
            value={postcode}
            onChange={(value) => setPostcode(value)}
          />
          <div className="p-2">
            <Button className="w-full" submit={true} disabled={!formChanged}>
              {navigation.state === 'submitting' ? 'Saving' : 'Save Changes'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}
