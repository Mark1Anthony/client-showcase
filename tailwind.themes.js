/**
 * Per-page Tailwind themes.
 *
 * Each page used to carry its own `tailwind.config` inline next to the CDN
 * script. Those configs cannot be merged into one stylesheet: four pages define
 * `fontFamily.display` with three different fonts (Fraunces, Playfair Display,
 * Instrument Serif) and strahlkraft overrides the built-in `teal` palette. So
 * every page gets its own compiled stylesheet, built from the theme below.
 *
 * Key = folder name, '' = the overview page at the repo root.
 */

const fadeAnimations = {
  animation: {
    'fade-up': 'fadeUp 0.8s ease-out forwards',
    'fade-in': 'fadeIn 1s ease-out forwards',
  },
  keyframes: {
    fadeUp: {
      '0%': { opacity: '0', transform: 'translateY(24px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
  },
};

module.exports = {
  '': {},

  automation: {},

  fitness: {},

  salon: {},

  funnel: {
    colors: {
      brand: {
        50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 500: '#22c55e',
        600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d',
      },
    },
  },

  restaurant: {
    colors: {
      terracotta: {
        50: '#FBF3EC', 100: '#F4E1D2', 200: '#E8C3A5', 300: '#D99E72',
        400: '#C87A4A', 500: '#B05A30', 600: '#8F4221', 700: '#6E3118',
        800: '#4D2010', 900: '#2C1208',
      },
      cream: { 50: '#FFFBF5', 100: '#FBF5EA', 200: '#F5EAD3' },
      deepred: { 500: '#8A1B1B', 600: '#6E1414', 700: '#530C0C' },
    },
    fontFamily: {
      display: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },

  steuerberater: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      navy: {
        50: '#f0f4fa', 100: '#d9e2f1', 200: '#b3c5e3', 300: '#8ca8d4',
        400: '#5a7bb0', 500: '#2f4f86', 600: '#1e3a6b', 700: '#15284d',
        800: '#0c1a33', 900: '#060f1f',
      },
      gold: { 400: '#d4af6a', 500: '#c49a54', 600: '#a37f3d' },
    },
  },

  'krueger-dach': {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Fraunces', 'serif'],
    },
    colors: {
      clay: {
        50: '#fdf6f3', 100: '#fbe9e1', 200: '#f7d0c0', 300: '#f0ac92',
        400: '#e67f5a', 500: '#d95d36', 600: '#c7462a', 700: '#a53722',
        800: '#863022', 900: '#6e2b21', 950: '#3b130e',
      },
      ink: {
        50: '#f6f6f5', 100: '#e7e6e4', 200: '#cfcdc8', 300: '#aeaaa3',
        400: '#87827a', 500: '#6b665e', 600: '#55514b', 700: '#45413d',
        800: '#3a3733', 900: '#27241f', 950: '#15130f',
      },
    },
    ...fadeAnimations,
  },

  strahlkraft: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['"Instrument Serif"', 'serif'],
    },
    colors: {
      teal: {
        50: '#ecfdf9', 100: '#d0faf1', 200: '#a4f3e3', 300: '#6ce6d1',
        400: '#36d0b9', 500: '#17b5a0', 600: '#0f9283', 700: '#12746b',
        800: '#135c57', 900: '#144c49', 950: '#052c2c',
      },
      mint: {
        50: '#f0fdf6', 100: '#dbfce9', 200: '#b9f7d3', 300: '#83eead',
        400: '#46dc82', 500: '#1fc362', 600: '#14a24d',
      },
      slate2: {
        50: '#f7f8f8', 100: '#eceeee', 200: '#d5dada', 300: '#b0baba',
        400: '#859393', 500: '#697878', 600: '#536161', 700: '#444f4f',
        800: '#3a4343', 900: '#1f2727', 950: '#0f1414',
      },
    },
    animation: {
      ...fadeAnimations.animation,
      float: 'float 6s ease-in-out infinite',
      'float-delayed': 'float 7s ease-in-out 1s infinite',
    },
    keyframes: {
      ...fadeAnimations.keyframes,
      float: {
        '0%,100%': { transform: 'translateY(0) scale(1)' },
        '50%': { transform: 'translateY(-20px) scale(1.05)' },
      },
    },
  },
};
