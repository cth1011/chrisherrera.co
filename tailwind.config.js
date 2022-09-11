module.exports = {
    plugins: [require('@tailwindcss/typography')],
    darkMode: "class",
    content: ['./components/**/*.tsx', './pages/**/*.tsx'],
    variants: {
      extend: {
        typography: ['dark'],
      },
    },
    theme: {
      extend: {
        typography: (theme) => ({
          dark: {
            css: {
              color: theme('colors.gray.300'),
              h1: {
                color: theme('colors.gray.100'),
              },
              h2: {
                color: theme('colors.gray.100'),
              },
            },
          },
        }),
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    }
  }
  };