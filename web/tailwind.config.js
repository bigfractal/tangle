const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{html,js}'],
    darkMode: 'class',
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                xl: '0',
            },
        },
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            primary: '#625DF5',
            white: '#FFFFFF',
            body: '#374151',
            dark: {
                DEFAULT: '#15171A',
                2: '#979797',
                3: '#B4B4BB',
                4: '#5C6A78',
                5: '#BBBEC9',
            },
            gray: {
                DEFAULT: '#F9FAFB',
                2: '#F3F4F6',
                3: '#E5E7EB',
                4: '#D1D5DB',
                5: '#9CA3AF',
                6: '#6B7280',
                7: '#374151',
            },
            blue: {
                DEFAULT: '#2D68F8',
                dark: '#1C3FB7',
                light: '#5475E5',
                'light-2': '#8099EC',
                'light-3': '#ADBCF2',
                'light-4': '#C3CEF6',
                'light-5': '#E1E8FF',
            },
            green: {
                DEFAULT: '#22AD5C',
                dark: '#1A8245',
                light: '#2CD673',
                'light-2': '#57DE8F',
                'light-3': '#82E6AC',
                'light-4': '#ACEFC8',
                'light-5': '#C2F3D6',
                'light-6': '#DAF8E6',
            },
            purple: {
                DEFAULT: '#8646F4',
                dark: '#6D28D9',
                'dark-2': '#5B21B6',
                light: '#A78BFA',
                'light-2': '#C4B5FD',
                'light-3': '#DDD6FE',
                'light-4': '#EDE9FE',
                'light-5': '#F5F3FF',
            },
            pink: {
                DEFAULT: '#D345F8',
                dark: '#C814F6',
                light: '#DF76FA',
                'light-2': '#EAA7FC',
                'light-3': '#F6D8FE',
                'light-4': '#FCF1FE',
            },
            cyan: {
                DEFAULT: '#01A9DB',
                dark: '#0B76B7',
                light: '#18BFFF',
                'light-2': '#77D1F3',
                'light-3': '#D0F0FD',
            },
            teal: {
                DEFAULT: '#02AAA4',
                dark: '#06A09B',
                light: '#20D9D2',
                'light-2': '#72DDC3',
                'light-3': '#C2F5E9',
            },
        },
        screens: {
            xsm: '375px',
            lsm: '425px',
            '3xl': '2000px',
            ...defaultTheme.screens,
        },
        extend: {
            fontSize: {
                'heading-1': ['60px', '72px'],
                'heading-2': ['48px', '58px'],
                'heading-3': ['40px', '48px'],
                'heading-4': ['30px', '38px'],
                'heading-5': ['28px', '40px'],
                'heading-6': ['24px', '30px'],
                'custom-1': ['45px', '55px'],
                'custom-2': ['42px', '54px'],
                'custom-3': ['32px', '45px'],
                'custom-4': ['22px', '30px'],
                'custom-xl': ['20px', '24px'],
                'custom-lg': ['18px', '24px'],
                'custom-sm': ['14px', '22px'],
                'custom-xs': ['12px', '20px'],
                'custom-4xl': ['36px', '42px'],
            },
            spacing: {
                4.5: '1.125rem',
                5.5: '1.375rem',
                6.5: '1.625rem',
                7.5: '1.875rem',
                8.5: '2.125rem',
                9.5: '2.375rem',
                10.5: '2.625rem',
                11: '2.75rem',
                11.5: '2.875rem',
                12.5: '3.125rem',
                13: '3.25rem',
                13.5: '3.375rem',
                14: '3.5rem',
                14.5: '3.625rem',
                15: '3.75rem',
                15.5: '3.875rem',
                16: '4rem',
                16.5: '4.125rem',
                17: '4.25rem',
                17.5: '4.375rem',
                18: '4.5rem',
                18.5: '4.625rem',
                19: '4.75rem',
                19.5: '4.875rem',
                21: '5.25rem',
                21.5: '5.375rem',
                22: '5.5rem',
                22.5: '5.625rem',
                24.5: '6.125rem',
                25: '6.25rem',
                25.5: '6.375rem',
                26: '6.5rem',
                27: '6.75rem',
                27.5: '6.875rem',
                29: '7.25rem',
                29.5: '7.375rem',
                30: '7.5rem',
                31: '7.75rem',
                31.5: '7.875rem',
                32.5: '8.125rem',
                34: '8.5rem',
                34.5: '8.625rem',
                35: '8.75rem',
                36.5: '9.125rem',
                37.5: '9.375rem',
                39: '9.75rem',
                39.5: '9.875rem',
                40: '10rem',
                42.5: '10.625rem',
                45: '11.25rem',
                46: '11.5rem',
                47.5: '11.875rem',
                49: '12.25rem',
                50: '12.5rem',
                52: '13rem',
                52.5: '13.125rem',
                54: '13.5rem',
                54.5: '13.625rem',
                55: '13.75rem',
                55.5: '13.875rem',
                59: '14.75rem',
                60: '15rem',
                62.5: '15.625rem',
                65: '16.25rem',
                67: '16.75rem',
                67.5: '16.875rem',
                70: '17.5rem',
                72.5: '18.125rem',
                75: '18.75rem',
                90: '22.5rem',
                92.5: '23.125rem',
                94: '23.5rem',
                100: '25rem',
                110: '27.5rem',
                115: '28.75rem',
                122.5: '30.625rem',
                125: '31.25rem',
                127.5: '31.875rem',
                132.5: '33.125rem',
                142.5: '35.625rem',
                150: '37.5rem',
                166.5: '41.625rem',
                171.5: '42.875rem',
                180: '45rem',
                187.5: '46.875rem',
                192.5: '48.125rem',
                203: '50.75rem',
                230: '57.5rem',
            },
            maxWidth: {
                30: '7.5rem',
                40: '10rem',
                50: '12.5rem',
            },
            zIndex: {
                999999: '999999',
                99999: '99999',
                9999: '9999',
                999: '999',
                1: '1',
            },
            boxShadow: {
                dropdown:
                    '0px 4px 5px 0px rgba(13, 10, 44, 0.04), 0px 10px 30px 0px rgba(13, 10, 44, 0.05)',
                box: '0px 8px 30px -8px rgba(13, 10, 44, 0.05), 0px 1px 5px 0px rgba(0, 0, 0, 0.04)',
                'box-2':
                    '0px 20px 60px 0px rgba(13, 10, 44, 0.15), 0px 2px 3px 0px rgba(13, 10, 44, 0.12)',
                img: '0px 13px 40px 0px rgba(13, 10, 44, 0.18)',
                input: 'inset 0 0 0 2px #15171A',
                1: '0px 1px 2px 0px rgba(166, 175, 195, 0.25)',
                2: '0px 4px 12px 0px rgba(13, 10, 44, 0.08)',
                3: '0px 2px 16px rgba(13, 10, 44, 0.12)',
                4: '0px -8px 18px rgba(13, 10, 44, 0.04), 0px 13px 40px rgba(13, 10, 44, 0.22)',
                5: '0px -18px 38px rgba(85, 106, 235, 0.04), 0px 4px 10px rgba(85, 106, 235, 0.04), 0px 10px 30px rgba(85, 106, 235, 0.12)',
                6: '0px 34px 26px rgba(13, 10, 44, 0.05), 0px 12px 34px rgba(13, 10, 44, 0.08)',
            },
            dropShadow: {
                1: '0px 8px 12px rgba(13, 10, 44, 0.04)',
            },
        },
    },
    plugins: [],
}
