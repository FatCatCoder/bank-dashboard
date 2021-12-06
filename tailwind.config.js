module.exports = {
    // mode: "jit",
    purge: {
      content: [
      "./src/*.{js,jsx,css,html}",
      "./src/**/*.{html,js,jsx,css}",
      "./src/components/.{js,jsx,css,html}",
      "./src/public/*.{html,js,jsx,css}",
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },},
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss'),
        require('daisyui'),
        require('autoprefixer'),
    ],
  };