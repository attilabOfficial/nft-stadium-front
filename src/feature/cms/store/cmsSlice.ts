import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../../store'
import axios from 'axios'

export interface IContent {
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
}
interface ICmsState {
    content: {
        [id: string]: IContent
    }
    loading: string
}

const initialState: ICmsState = {
    content: {},
    loading: 'idle',
}

export const getContent = createAsyncThunk(
    'cmsState/getAbout',
    async (articleId: string) => {
        try {
            const response = await axios.get(
                `https://agile-bayou-23095.herokuapp.com/api/${articleId}`
            )
            const data = response.data
            return { articleId, data }
        } catch (error) {
            console.error(error)
        }
    }
)

export const cmsSlice = createSlice({
    name: 'cmsState',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getContent.pending, (state) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(getContent.fulfilled, (state, action) => {
            if (action.payload) {
                const { articleId, data } = action.payload
                state.content[articleId] = data
            }
            state.loading = 'idle'
        })
        builder.addCase(getContent.rejected, (state) => {
            state.loading = 'idle'
            console.log('rejected')
        })
    },
})

export const isContentLoadingSelector = (state: RootState) =>
    state.cmsState.loading

export const cmsSelector = (state: RootState, articleId: string) =>
    state.cmsState &&
    state.cmsState.content &&
    state.cmsState.content[articleId]
