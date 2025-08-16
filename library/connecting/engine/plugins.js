import fs from 'fs'
import path from 'path'
import url from 'url'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function loadPlug() {
  const pluginsDir = path.join(__dirname, '../../../plugins')
  const files = fs.readdirSync(pluginsDir).filter(f => f.endsWith('.js'))
  const plugins = []

  for (const file of files) {
    const filePath = path.join(pluginsDir, file)
    const plugin = await import(url.pathToFileURL(filePath).href)
    plugins.push(plugin.default || plugin)
  }

  return plugins
}