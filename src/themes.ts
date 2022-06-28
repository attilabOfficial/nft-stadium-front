export interface ITheme {
    id: string
    name: string
    colors: {
        backgroundColor: string
        primaryColor: string
        darkFontColor: string
        lightFontColor: string
        whiteFontColor: string
    }
}

export const greyTheme: ITheme = {
    id: 'T_001',
    name: 'grey',
    colors: {
        backgroundColor: '#F3F4F6',
        primaryColor: 'white',
        darkFontColor: '#212936',
        lightFontColor: '#8F95A0',
        whiteFontColor: 'white',
    },
}

export const blueTheme: ITheme = {
    id: 'T_002',
    name: 'blue',
    colors: {
        backgroundColor: '#F1F4FF',
        primaryColor: '#2E55FF',
        darkFontColor: '#122266',
        lightFontColor: '#D5DDFF',
        whiteFontColor: 'white',
    },
}

export const yellowTheme: ITheme = {
    id: 'T_003',
    name: 'yellow',
    colors: {
        backgroundColor: '#FFFBF4',
        primaryColor: '#EFBA1E',
        darkFontColor: '#3D3009',
        lightFontColor: '#FCF1D2',
        whiteFontColor: 'white',
    },
}
