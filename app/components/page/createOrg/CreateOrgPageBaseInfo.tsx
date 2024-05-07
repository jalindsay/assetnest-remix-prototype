import { SelectInput } from '~/components/ui/SelectInput'
import { TextArea } from '~/components/ui/TextArea'
import { TextInput } from '~/components/ui/TextInput'
import { subPageTitle } from '~/styles/typography'
import type { country } from '~/utils/arrayOfAllCountries';
import { allCountries } from '~/utils/arrayOfAllCountries'

interface IProps {
  setName(name: string): void
  name: string
  nameError?: string
  setDescription(description: string): void
  description: string
  descriptionError?: string
  setAddress(address: string): void
  address: string
  addressError?: string
  setCity(city: string): void
  city: string
  cityError?: string
  setCountry(country: country): void
  country: country
  countryError?: string
  setPostcode(postcode: string): void
  postcode: string
  postcodeError?: string
}

export const CreateOrgPageBaseInfo = ({
  name,
  setName,
  nameError,
  setDescription,
  description,
  descriptionError,
  setAddress,
  address,
  addressError,
  setCity,
  city,
  cityError,
  setCountry,
  country,
  setPostcode,
  postcode,
  postcodeError,
}: IProps) => {
  const listOfCountries = allCountries.map((country) => {
    return { value: country.code, valueLabel: country.name }
  })
  return (
    <>
      <div>
        <div className="py-2 ">
          <TextInput
            name={'name'}
            onChange={(value) => {
              if (value.length < 250) {
                setName(value)
              }
            }}
            value={name}
            placeholder="Name"
            label="Give your organisation a name"
            error={!!nameError}
            helpText={nameError ?? ''}
            noPadding
          />
        </div>
        <div className="py-2">
          <TextArea
            name={'description'}
            onChange={(value) => {
              if (value.length < 250) {
                setDescription(value)
              }
            }}
            value={description}
            placeholder="Description"
            label="Add a short description about your organisation"
            error={!!descriptionError}
            helpText={descriptionError ?? ''}
            noPadding
          />
        </div>
      </div>
      <h2 className={`${subPageTitle} py-2`}>Location</h2>
      <div className="py-2">
        <TextArea
          name={'address'}
          onChange={(value) => {
            if (value.length < 250) {
              setAddress(value)
            }
          }}
          value={address}
          placeholder="Street Address"
          label="Street Address"
          error={!!addressError}
          helpText={addressError ?? ''}
          noPadding
        />
      </div>
      <div className="py-2">
        <TextInput
          name={'city'}
          onChange={(value) => {
            if (value.length < 250) {
              setCity(value)
            }
          }}
          value={city}
          placeholder="City"
          label="City"
          error={!!cityError}
          helpText={cityError ?? ''}
          noPadding
        />
      </div>
      {/* set up select input label stuff */}
      <div className="py-2">
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
          noPadding
        />
      </div>
      <div className="w-32 py-2">
        <TextInput
          name={'postcode'}
          onChange={(value) => {
            if (value.length < 250) {
              setPostcode(value)
            }
          }}
          value={postcode}
          placeholder="Postcode"
          label="Postcode"
          error={!!postcodeError}
          helpText={postcodeError ?? ''}
          noPadding
        />
      </div>
    </>
  )
}
