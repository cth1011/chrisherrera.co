import withMDX from '@next/mdx'

const config = withMDX({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

export default {
  ...config,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}