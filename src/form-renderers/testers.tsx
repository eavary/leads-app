import { rankWith, isStringControl, and, uiTypeIs } from '@jsonforms/core'

// Tester for CustomInputRenderer
export const customInputTester = rankWith(
  3, // Lower priority than material renderers
  and(
    isStringControl,
    uiTypeIs('Control'),
    (uischema) => uischema.options && uischema.options.customInput
  )
)

// Tester for CustomTextareaRenderer
export const customTextareaTester = rankWith(
  4, // Slightly higher priority for textarea
  and(
    isStringControl,
    uiTypeIs('Control'),
    (uischema) => uischema.options && uischema.options.customTextarea
  )
)
