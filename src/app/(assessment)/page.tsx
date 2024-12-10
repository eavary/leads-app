import Image from 'next/image'

import PageSection from '@/components/assessment/page-section'

export default function AssessmentPage() {
  return (
    <>
      <section className="w-full hero">
        <div className="flex items-center bg-[#d9dea6]">
          <Image 
            src="/hero-slices.png"
            alt="Hero Slices"
            width={207}
            height={368}
          />
          <div className="ml-8 flex-col space-y-12">
            <Image 
              src="/logo.png"
              alt="Hero Slices"
              width={80}
              height={65}
            />
            <h1 className="text-3xl font-bold">
              Get An Assessment<br />
              Of Your Immigration Case
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 items-center pt-10">
        <PageSection
          imageSrc="/icon-info.png"
          altText="Info"
          title="Want to understand your visa options?"
          text="Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals."
        >
          [Form]
        </PageSection>

        <PageSection
          imageSrc="/icon-dice.png"
          altText="Info"
          title="Visa categories of interest?"
        >
          [checkboxes]
        </PageSection>

        <PageSection
          imageSrc="/icon-heart.png"
          altText="Info"
          title="How can we help you?"
        >
          [textarea]
        </PageSection>
      </section>
    </>
  )
}
