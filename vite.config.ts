
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Emits robots.txt and sitemap.xml during production builds. */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    generateBundle() {
      const base = siteUrl.replace(/\/$/, '')

      const robots = [
        'User-agent: *',
        'Allow: /',
        base ? `Sitemap: ${base}/sitemap.xml` : '',
      ]
        .filter(Boolean)
        .join('\n') + '\n'

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robots,
      })

      if (base) {
        const urls = [
          '/',
          '/projects/gui-task-management-system',
          '/projects/syncspace',
          '/projects/securefy',
          '/projects/mathmastery-online',
          '/projects/life-below-water',
        ]

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url><loc>${base}${u}</loc></url>`)
  .join('\n')}
</urlset>
`

        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: xml,
        })
      }
    },

    transformIndexHtml(html, ctx) {
      const base = siteUrl.replace(/\/$/, '')
      let out = html.replaceAll('%SITE_URL%', base)

      // Allow Vite development-server HMR by removing the production CSP.
      if (ctx.server) {
        out = out.replace(
          /<meta http-equiv="Content-Security-Policy"[^>]*>\s*/,
          '',
        )
      }

      return out
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.SITE_URL ?? ''

  return {
    // Required for GitHub Pages project repositories.
    base: '/My-Portfolio/',

    plugins: [
      react(),
      tailwindcss(),
      seoFiles(siteUrl),
    ],

    build: {
      target: 'es2022',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,

      rollupOptions: {
        output: {
          // Keep animation code in its own chunk.
          manualChunks(id: string) {
            if (
              id.includes('node_modules/framer-motion') ||
              id.includes('node_modules/motion-')
            ) {
              return 'motion'
            }
          },
        },
      },
    },
  }
})
