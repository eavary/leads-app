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
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
        },
        {
          type: 'Control',
          scope: '#/properties/email',
        },
        {
          type: 'Control',
          scope: '#/properties/country',
        },
        {
          type: 'Control',
          scope: '#/properties/url',
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
      type: "Control",
      scope: "#/categories/multiEnum",
    },
  ]
}

export const moreInfoSchema = {
  type: 'object',
  properties: {
    multilineString: {
      type: "string",
      description: "Multiline Example"
    },
  },
}

export const moreInfoUISchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/multiLineString',
      options: {
        multi: true,
      }
    },
  ],
}

export const leadData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com',
  country: 'United States',
  url: 'http://www.test.com',
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
