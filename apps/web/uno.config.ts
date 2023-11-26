import {
  defineConfig,
  presetAttributify,
  presetUno,
  // presetIcons,
  // presetTypography,
  // presetWebFonts,
  // transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerVariantGroup()],
})
