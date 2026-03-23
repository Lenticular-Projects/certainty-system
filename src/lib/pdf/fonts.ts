import { Font } from '@react-pdf/renderer'
import path from 'path'

let registered = false

export function registerFonts() {
  if (registered) return
  registered = true

  const geistDir = path.join(
    process.cwd(),
    'node_modules/geist/dist/fonts/geist-sans'
  )
  const playfairDir = path.join(
    process.cwd(),
    'node_modules/@fontsource/playfair-display/files'
  )

  Font.register({
    family: 'Geist',
    fonts: [
      { src: path.join(geistDir, 'Geist-Regular.ttf'), fontWeight: 400 },
      { src: path.join(geistDir, 'Geist-Italic.ttf'), fontWeight: 400, fontStyle: 'italic' as const },
      { src: path.join(geistDir, 'Geist-Medium.ttf'), fontWeight: 500 },
      { src: path.join(geistDir, 'Geist-SemiBold.ttf'), fontWeight: 600 },
      { src: path.join(geistDir, 'Geist-Bold.ttf'), fontWeight: 700 },
      { src: path.join(geistDir, 'Geist-BoldItalic.ttf'), fontWeight: 700, fontStyle: 'italic' as const },
    ],
  })

  Font.register({
    family: 'Playfair Display',
    fonts: [
      {
        src: path.join(playfairDir, 'playfair-display-latin-400-normal.woff'),
        fontWeight: 400,
      },
      {
        src: path.join(playfairDir, 'playfair-display-latin-400-italic.woff'),
        fontWeight: 400,
        fontStyle: 'italic',
      },
      {
        src: path.join(playfairDir, 'playfair-display-latin-700-normal.woff'),
        fontWeight: 700,
      },
      {
        src: path.join(playfairDir, 'playfair-display-latin-700-italic.woff'),
        fontWeight: 700,
        fontStyle: 'italic',
      },
    ],
  })
}
