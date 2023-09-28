import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const Title = "Develop in WSL2"
const config: DocsThemeConfig = {
  logo: <span>{Title}</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'This Document from Tiamat',
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: `%s | ${Title}`,
      /* openGraph: {
        
      } */
    }
  }
}

export default config
