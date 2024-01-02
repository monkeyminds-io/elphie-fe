import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    // TODO Remove preline modules
    'node_modules/preline/dist/*.js',
  ],
  theme: {},
  plugins: [
    // TODO Remove tailwind forms and preline plugins
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}
export default config
