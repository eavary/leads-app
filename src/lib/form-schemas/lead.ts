export const leadSchema = {
  type: 'object',
  properties: {
    firstName: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your first name.',
    },
    lastName: {
      type: 'string',
      minLength: 3,
      description: 'Please enter your last name.',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    country: {
      type: 'string',
      enum: [
        'United States',
        'Germany',
        'Italy',
        'France',
        'Spain',
        'United Kingdom',
        'China',
        'Japan',
        'Brazil',
        'Canada',
      ],
    },
    url: {
      type: 'string',
    },
  },
  required: ['firstName', 'lastName', 'email', 'country', 'url'],
}

export const leadUISchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'VerticalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
          options: {
            customInput: true,
            'ui:placeholder': 'First Name',
          },
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
          options: {
            customInput: true,
            'ui:placeholder': 'Last Name',
          },
        },
        {
          type: 'Control',
          scope: '#/properties/email',
          options: {
            customInput: true,
            'ui:placeholder': 'Email',
          },
        },
        {
          type: 'Control',
          scope: '#/properties/country',
          options: {
            customInput: true,
            'ui:placeholder': 'Country',
          },
        },
        {
          type: 'Control',
          scope: '#/properties/url',
          options: {
            customInput: true,
            'ui:placeholder': 'LinkedIn or personal url',
          },
        },
      ],
    },
  ],
}

export const categoriesSchema = {
  type: 'object',
  categories: {
    multiEnum: {
      type: 'array',
      title: 'Categories',
      uniqueItems: true,
      items: {
        type: 'string',
        enum: [
          'O-1',
          'EB-1A',
          'EB-2 NIW',
          'I don\'t know',
        ],
      },
    },
  }
}

export const categoriesUISchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/categories/multiEnum',
    },
  ]
}

export const moreInfoSchema = {
  type: 'object',
  properties: {
    moreInfoText: {
      type: 'string',
      description: 'Tell us more about your case.',
    },
  },
}

export const moreInfoUISchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/moreInfoText',
      options: {
        customTextarea: true,
        'ui:placeholder': 'What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?',
      }
    },
  ],
}

// testing
// export const leadData = {
//   firstName: 'John',
//   lastName: 'Doe',
//   email: 'john.doe@test.com',
//   country: 'United States',
//   url: 'http://www.test.com',
// }

export const leadData = {
  firstName: '',
  lastName: '',
  email: '',
  country: '',
  url: '',
}

export const lead = {
  name: 'lead',
  label: 'Lead',
  leadData,
  leadSchema,
  leadUISchema,
  categoriesSchema,
  categoriesUISchema,
  moreInfoSchema,
  moreInfoUISchema,
}
