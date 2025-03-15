module.exports = {
    plugins: [require('@tailwindcss/typography')],
    darkMode: ["class", "[data-mode='dark'"],
    content: ['./components/**/*.tsx', './pages/**/*.tsx', './_posts/**/*.mdx'],
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
              h3: {
                color: theme('colors.gray.100'),
              },
              h4: {
                color: theme('colors.gray.100'),
              },
              h5: {
                color: theme('colors.gray.100'),
              },
              h6: {
                color: theme('colors.gray.100'),
              },
            },
          },
        }),
        backgroundImage: {
          'haven': "url('/assets/haven-chat.jpeg')",
          'covid': "url('/assets/mapbox-exam/covid-japan.jpg')",
          'blog': "url('/assets/blog.png')",
          'hermosa': "url('/assets/hermosa.png')",
          'hiv': "url('/assets/HIV.png')"
        }
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