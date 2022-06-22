import env from 'react-dotenv'

// change grid properties here
export const NBR_COL = env.NBR_COL || 25
export const NBR_ROW = env.NBR_ROW || 17
export const TOTAL_CELLS = NBR_COL * NBR_ROW

export const STRAPI_URL = env.STRAPI_URL || ''

export const MAP_CENTER = (NBR_COL * NBR_ROW - 1) / 2

// Mock mode
export const MOCK = (env.MOCK && env.MOCK === 'true') || false

export const HARDHAT_NETWORK_ID = env.HARDHAT_NETWORK_ID || '80001'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
