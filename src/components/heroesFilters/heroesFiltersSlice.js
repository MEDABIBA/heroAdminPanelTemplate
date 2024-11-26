import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    heroesLoadingStatus: 'idle',
    filters: [{
        water: true,
        fire: true,
        wind: true,
        earth: true
    }]
}

const heroesFiltersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        heroFilter: (state, action) => { 
            state.filters[0] = action.payload
            state.heroesLoadingStatus = 'idle'
        }
    }
})

const {actions, reducer} = heroesFiltersSlice
export default reducer
export const {heroFilter} = actions