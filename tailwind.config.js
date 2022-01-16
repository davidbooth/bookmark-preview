module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'pelican-white': '#fdfdfd',
                'pelican-blue': '#092358',
                'pelican-light-blue': '#bbd2dc',
                'pelican-orange': '#b97324',
            },
            width: {
                128: '32rem',
            },
        },
    },
    plugins: [],
};
