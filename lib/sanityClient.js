import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '3sjs24e0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skYjGNVmsjrShDSikgOmJVYs1HFEB8arP5gu3IDisq2J6DLG76SVJiVgsZjMIkxbCdxuB4jrmFx7QXRrlCdoe83zvMCjJtfwc3rRgq4QmlMuRtUzAF5Qigt3p4HcgE7xpVqoqZDZWt3XaOM4uBgOvcdYyxxfe821gdzW01Sez9MbNpg79sqz',
  useCdn: false,
})
