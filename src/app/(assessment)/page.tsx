'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLead } from '@/store/store'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { JsonForms } from '@jsonforms/react'
import { materialCells, materialRenderers } from '@jsonforms/material-renderers'
import CustomTextareaRenderer from '@/form-renderers/CustomTextareaRenderer'
import CustomInputRenderer from '@/form-renderers/CustomInputRenderer'
import { customInputTester, customTextareaTester } from '@/form-renderers/testers'
import { lead } from '@/lib/form-schemas/lead'
import { STATUS } from '@/lib/constants'

import PageSection from '@/components/assessment/page-section'

const ajv = new Ajv({ strict: false })
addFormats(ajv)

// Add the custom renderer to the list of renderers
const renderers = [
  ...materialRenderers,
  { tester: customInputTester, renderer: CustomInputRenderer },
  { tester: customTextareaTester, renderer: CustomTextareaRenderer },
]

export default function AssessmentPage() {
  const dispatch = useDispatch()
  const router = useRouter()

  const leadSchema = lead.leadSchema
  const leadUISchema = lead.leadUISchema
  const leadInitialData = lead.leadData

  const categoriesSchema = lead.categoriesSchema
  const categoriesUISchema = lead.categoriesUISchema

  const moreInfoSchema = lead.moreInfoSchema
  const moreInfoUISchema = lead.moreInfoUISchema

  const [leadData, setLeadData] = useState(leadInitialData)
  const [categoriesData, setCategoriesData] = useState({})
  const [moreInfoData, setMoreInfoData] = useState({})

  const handleFormSubmit = (e: any) => {
    e.preventDefault()

    // Validate lead data
    const leadValidate = ajv.compile(leadSchema)
    const leadIsValid = leadValidate(leadData)
  
    // Validate categories data
    const categoriesValidate = ajv.compile(categoriesSchema)
    const categoriesIsValid = categoriesValidate(categoriesData)
  
    // Validate more info data
    const moreInfoValidate = ajv.compile(moreInfoSchema)
    const moreInfoIsValid = moreInfoValidate(moreInfoData)
  
    if (leadIsValid && categoriesIsValid && moreInfoIsValid) {
      dispatch(addLead({
        id: Math.random().toString(36).substr(2, 9),
        firstName: leadData.firstName,
        lastName: leadData.lastName,
        name: `${leadData.firstName} ${leadData.lastName}`,
        email: leadData.email,
        country: leadData.country,
        url: leadData.url,
        categories: categoriesData, 
        moreInfo: moreInfoData,
        submitted: new Date().toISOString(),
        status: STATUS.PENDING,
      }))

      // reset the form
      setLeadData(leadInitialData)
      setCategoriesData({})
      setMoreInfoData({})

      router.push('/thanks')
    } else {
      // TODO: Handle form validation errors here
    }
  }

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

      <section className="flex flex-col gap-8 items-center pt-10 pb-16">
        <form onSubmit={handleFormSubmit}>
          <PageSection
            imageSrc="/icon-info.png"
            altText="Info"
            title="Want to understand your visa options?"
            text="Submit the form below and our team of experienced attorneys will review your information and send a preliminary assessment of your case based on your goals."
          >
            <JsonForms
              schema={leadSchema}
              uischema={leadUISchema}
              data={leadData}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => setLeadData(data)}
            />
          </PageSection>

          <PageSection
            imageSrc="/icon-dice.png"
            altText="Info"
            title="Visa categories of interest?"
          >
            <JsonForms
              schema={categoriesSchema}
              uischema={categoriesUISchema}
              data={categoriesData}
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ data, errors }) => setCategoriesData(data)}
            />
          </PageSection>

          <PageSection
            imageSrc="/icon-heart.png"
            altText="Info"
            title="How can we help you?"
          >
            <JsonForms
              schema={moreInfoSchema}
              uischema={moreInfoUISchema}
              data={moreInfoData}
              renderers={renderers}
              cells={materialCells}
              onChange={({ data, errors }) => setMoreInfoData(data)}
            />
          </PageSection>
          <div className="flex justify-center">
            <Button type="submit" className="mt-8 px-16">
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  )
}
