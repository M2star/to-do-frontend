import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        pink: '#FF3366',
        borderBG:'#2D313B',
      },
      backgroundOpacity: {
        '30': '0.3',
        '09': '0.09',
      },
      backgroundImage: theme => ({
        'gradient': `linear-gradient(115deg, var(--bg-first) -5.53%,var(--bg-second)  118.4%)`,
      }),
  },
  plugins: [],
}
}
export default config
