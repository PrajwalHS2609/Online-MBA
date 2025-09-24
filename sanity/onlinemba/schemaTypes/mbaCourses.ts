// schemas/mbaCourse.ts
import {defineType} from 'sanity'

export default defineType({
  name: 'mbaCourse',
  title: 'MBA Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'overview',
      title: 'Course Overview',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'customTable',
      title: 'Course Structure (Table)',
      type: 'object',
      fields: [
        {name: 'title', title: 'Table Title', type: 'string'},
        {
          name: 'headers',
          title: 'Headers',
          type: 'array',
          of: [{type: 'string'}],
        },
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'cells',
                  title: 'Cells',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'youtubeVideoUrl',
      title: 'YouTube Video URL',
      type: 'url',
    },
  ],
})
