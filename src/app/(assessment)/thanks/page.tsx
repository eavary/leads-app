import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function AssessmentThanksPage() {
  return (
    <div className="flex flex-col spacing-y-8 my-20 items-center max-w-lg">
      <Image
        src="/icon-info.png"
        alt="Info"
        width={50}
        height={50}
      />
      <h1 className="text-lg font-semibold my-3">Thank You</h1>
      <p className="text-sm text-center font-semibold mb-3">
        Your information was submitted to our team of immigration attorneys. Expect an email from hello@tryalma.ai.
      </p>
      <Link href="/" className="mt-6">
        <Button className="px-16">
          Go Back to Homepage
        </Button>
      </Link>
      <Link href="/admin" className="mt-6">
        <Button className="px-16">
          Admin
        </Button>
      </Link>
    </div>
  )
}
