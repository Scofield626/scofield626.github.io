import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkPrism from 'remark-prism'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://scofield626.github.io/',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  base:'/',
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  markdown: {
    // extendDefaultPlugins: true,
    remarkPlugins: [
      remarkMath,
      remarkGfm,
      remarkReadingTime,
      [
        remarkPrism,
        {
          plugins: ['line-numbers'],
          transformInlineCode: false
        }
      ]
    ],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
          macros: {
            '\\E': '\\mathbb{E}',
            '\\C': '\\mathbb{C}',
            '\\R': '\\mathbb{R}',
            '\\N': '\\mathbb{N}',
            '\\Q': '\\mathbb{Q}',
            '\\bigO': '\\mathcal{O}',
            '\\abs': '|#1|',
            '\\set': '\\{ #1 \\}',
            '\\indep': '{\\perp\\mkern-9.5mu\\perp}',
            '\\nindep': '{\\not\\!\\perp\\!\\!\\!\\perp}',
            '\\latex': '\\LaTeX',
            '\\katex': '\\KaTeX'
          }
        }
      ]
    ],
    syntaxHighlight: false
  }
})
