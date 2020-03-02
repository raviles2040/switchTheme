/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      background: {
        primary: 'var(--bg-background-primary) !important',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary) !important',
        secondary: 'var(--text-copy-hover) !important',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },
    }
  },
  variants: {},
  plugins: []
}
