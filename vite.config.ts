import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Emits robots.txt / sitemap.xml. A sitemap needs an absolute URL, so it is
 *  only written when SITE_URL is provided (e.g. SITE_URL=https://your-domain.com). */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    generateBundle() {
      const base = siteUrl.replace(/\/$/, '')
      const robots = ['User-agent: *', 'Allow: /', base ? `Sitemap: ${base}/sitemap.xml` : ''].filter(Boolean).join('\n') + '\n'
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      if (base) {
        const urls = ['/', '/projects/gui-task-management-system', '/projects/syncspace', '/projects/securefy', '/projects/mathmastery-online', '/projects/life-below-water']
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${base}${u}</loc></url>`)
          .join('\n')}\n</urlset>\n`
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: xml })
      }
    },
    transformIndexHtml(html, ctx) {
      const base = siteUrl.replace(/\/$/, '')
      let out = html.replaceAll('%SITE_URL%', base)
      // The meta CSP would block Vite's dev-server HMR, so it only ships in production builds.
      if (ctx.server) out = out.replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\s*/, '')
      return out
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.SITE_URL ?? ''
  return {
    plugins: [react(), tailwindcss(), seoFiles(siteUrl)],
    build: {
      target: 'es2022',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // Only split animation code; three / R3F stay inside the lazy HeroScene chunk
          // so the heavy 3D bundle is never preloaded on first paint.
          manualChunks(id: string) {
            if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion-')) return 'motion'
          },
        },
      },
    },
  }
})
