module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'yellow-light': '#FBEFA4',
                yellow: '#F6DA2B',
                gray: '#FAFBFD',
                'gray-2': '#E5E5E5',
                'gray-3': '#898B96',
            },
            width: {
                30: '30%',
            },
        },
    },
    variants: {
        extend: {
            fontWeight: 'hover',
            borderWidth: 'hover',
            borderStyle: 'hover',
        },
    },
    plugins: [],
};
