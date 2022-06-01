import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import axios from 'axios'

interface ICmsState {
    about: {
        data: {
            id: number
            attributes: {
                content: string
                createdAt: string
                updatedAt: string
                publishedAt: string
            }
        }
        meta: object
    } | void
}

const initialState = {
    about: undefined,
}

export const getAbout = createAsyncThunk('cmsState/getAbout', async () => {
    try {
        const response = await axios.get('http://localhost:1337/api/about-us')
        const data = response.data
        return data
    } catch (error) {
        console.error(error)
    }
})

export const cmsSlice = createSlice({
    name: 'cmsState',
    initialState,
    reducers: {
        setAbout: (state: ICmsState) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(getAbout.pending, (state) => {
            console.log('loading')
        })
        builder.addCase(getAbout.fulfilled, (state, action) => {
            console.log('state', state)
            console.log('action', action)
            state.about = action.payload
        })
        builder.addCase(getAbout.rejected, (state) => {
            console.log('rejected')
        })
    },
})

export const aboutSelector = (state: RootState) => state.cmsState.about

export const { setAbout } = cmsSlice.actions
