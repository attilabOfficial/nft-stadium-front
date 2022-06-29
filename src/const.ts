// change grid properties here
export const REACT_APP_NBR_COL = process.env.NBR_COL || 25
export const REACT_APP_NBR_ROW = process.env.NBR_ROW || 17
export const REACT_APP_TOTAL_CELLS =
    Number(REACT_APP_NBR_COL) * Number(REACT_APP_NBR_ROW)

export const REACT_APP_STRAPI_URL = process.env.STRAPI_URL || ''

// Mock mode
export const REACT_APP_MOCK =
    (process.env.MOCK && process.env.MOCK === 'true') || false

export const REACT_APP_HARDHAT_NETWORK_ID =
    process.env.HARDHAT_NETWORK_ID || '80001'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
