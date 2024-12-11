import React from 'react'
import { withJsonFormsControlProps } from '@jsonforms/react'
import { ControlProps } from '@jsonforms/core'
import { Input } from '@/components/ui/input'

const CustomInputRenderer = ({ data, handleChange, path, uischema, errors }: ControlProps) => {
  const placeholder = uischema.options && uischema.options['ui:placeholder']
  
  return (
    <div className={`custom-input-wrapper ${errors && `error`}`}>
      <Input
        value={data || ''}
        onChange={(event) => handleChange(path, event.target.value)}
        placeholder={placeholder || "Enter text here..."}
        className="my-4 py-10"
      />
      {errors && <div className="error-message text-xs mt-2 px-2">{errors}</div>}
    </div>
  )
}

export default withJsonFormsControlProps(CustomInputRenderer)
