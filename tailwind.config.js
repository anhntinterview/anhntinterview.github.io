const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
            },
            keyframes: () => ({
            }),
            colors: {

            },
            borderRadius: {

            },
            backgroundImage: {
                'main_bg': "url('/src/assets/bg2.svg')",
                'select_bg': "url('/src/assets/stack.svg')",
            },
            backgroundPosition: {
                'rn_bg_pos': '24px 14px',
                'rn_select_bg_pos': '95% 45%'
            },
            fontSize: {
                rn_10px: '10px',
                rn_32px: '32px'
            },
            inset: {
                rn_131px: '131px'
            },
            backgroundSize: {
            },
            borderColor: {
                rn_light_blue: '#68B8F8',
                rn_black: '#151A30',
                rn_light_gray: '#C5CEE0'
            },
            spaceBetween: {
            },
            boxShadow: {

            },
            padding: {
                rn_62px: '62px',
                rn_6px: '6px',
                rn_18px: '18px',
                rn_14px: '14px'
            },
            margin: {
                rn_6px: '6px',
            },
            height: {
                rn_600px: '600px',
                rn_160px: '160px',
                rn_202px: '202px',
                rn_600px: '600px',
                rn_60px: '60px'
            },
            width: {
                rn_375px: '375px',
                rn_113px: '113px',
                rn_48px: '48px',
                rn_41px: '41px',
                rn_126px: '126px',
                rn_336px: '336px',
            },
            backgroundColor: {
                rn_light_gray: '#F7F9FC',
                rn_black: '#151A30'
            },
            lineHeight: {

            },
            textColor: {
                rn_black: '#151A30',
                rn_light_blue: '#8DC9F9',
                rn_light_gray: '#8F9BB3'
            },
            borderWidth: {

            },
            gap: {

            },
            screens: {

            },
            zIndex: {

            },
            maxHeight: {

            },
            minHeight: {

            },
            minWidth: {

            },
            maxWidth: {

            },
            transitionProperty: {

            },
            gridTemplateRows: {

            },
            gridRow: {

            },
        },
        fontFamily: {
        },
        fill: (theme) => ({

        }),
        dropShadow: {
        },
    },
    variants: {

    },
}
