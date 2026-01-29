import nextra from 'nextra'

const withNextra = nextra({
  // Nextra config here
})

export default withNextra({
  // Next.js config here
  turbopack: {
    resolveAlias: {
      // Point this to your file. Use './src/mdx-components' if it's in src/
      'next-mdx-import-source-file': './src/app/mdx-components.js' 
    }
  }
})