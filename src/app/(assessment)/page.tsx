'use client'

import { useState } from 'react'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"

import { JsonForms } from '@jsonforms/react'
import { materialCells, materialRenderers } from '@jsonforms/material-renderers'

import { lead } from '@/lib/form-schemas/lead'

import PageSection from '@/components/assessment/page-section'

export default function AssessmentPage() {

  const leadSchema = lead.leadSchema
  const leadUISchema = lead.leadUISchema
  const leadInitialData = lead.leadData

  const categoriesSchema = lead.categoriesSchema
  const categoriesUISchema = lead.categoriesUISchema

  // const moreInfoSchema = lead.moreInfoSchema
  // const moreInfoUISchema = lead.moreInfoUISchema

  const [leadData, setLeadData] = useState(leadInitialData)
  const [categoriesData, setCategoriesData] = useState([])
  const [moreInfoData, setMoreInfoData] = useState('')

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
            renderers={materialRenderers}
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
          {/* this doesn't work: No applicable renderer found */}
          {/*
          <JsonForms
            schema={moreInfoSchema}
            uischema={moreInfoUISchema}
            data={moreInfoData}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({ data, errors }) => setMoreInfoData(data)}
          />
          */}          
          <Textarea
            placeholder="
              What is your current status and when does it expire? 
              What is your past immigration history?
              Are you looking for long-term permanent residency or short-term employment visa or both?
              Are there any timeline considerations?
            "
            className="min-h-[120px]"
            value={moreInfoData}
            onChange={(e) => setMoreInfoData(e.target.value)}
          />
        </PageSection>

        {/* TODO: handle form submission */}
        <Button className="mt-8">
          Submit
        </Button>
      </section>
    </>
  )
}
