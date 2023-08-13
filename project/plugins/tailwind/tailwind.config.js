tailwind.config = {
  darkMode:'class',
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 10px 22px 0px rgba(147, 117, 81, 1)',
        '2xl': '1px 2px 4px 0px rgba(112, 192, 91, 0.20)',
      },
        boxShadow: {
          '3xl': '1px 2px 4px 0px rgba(0, 0, 0, 0.10)',
          '4xl': '4px 8px 16px 0px rgba(255, 102, 51, 0.20)',
          '5xl': '4px 80px 16px 0px rgba(112, 192, 91, 0.20)',
        }
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.9rem',
        lg: '1rem',
        xl: '1.2rem'
      },
      center: 'true',
    },
    
      colors: {
        white: '#ffffff',
        lightGreen: '#7EB693',
        currentGeen :'#274C5B',
        lightGray : '#F1F8F4',
        currentGray: '#525C60',
        currentBlue: '#274C5B',
      
    },
  },
};
