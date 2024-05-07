import { Link } from '@remix-run/react'
import Button from '~/components/ui/Button'
import { Card } from '~/components/ui/Card'

export function CatchBoundary() {
  return null
}

export default function Page() {
  return (
    <Card>
      <div className="p-5">
        <h2 className=" text-brand_Teal text-center text-lg font-bold">
          We couldn't find that page!
        </h2>
        <Link to="/">
          <Button className="w-full" variant="default" onClick={() => {}}>
            Go back
          </Button>
        </Link>{' '}
      </div>
    </Card>
  )
}
