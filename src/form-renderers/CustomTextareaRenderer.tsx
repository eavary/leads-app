import React from 'react'
import { withJsonFormsControlProps } from '@jsonforms/react'
import { ControlProps } from '@jsonforms/core'
import { Textarea } from '@/components/ui/textarea'

const CustomTextareaRenderer = ({ data, handleChange, path, uischema, errors }: ControlProps) => {
  const placeholder = uischema.options && uischema.options['ui:placeholder']
  
  return (
    <div className={`custom-input-wrapper ${errors && `error border-rose-600`}`}>
      <Textarea
        value={data || ''}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={placeholder || "Enter text here..."}
        className={errors && `border-rose-600`}
      />
      {errors && <div className="error-message text-xs mt-2 px-2">{errors}</div>}
    </div>
  )
}

export default withJsonFormsControlProps(CustomTextareaRenderer)
