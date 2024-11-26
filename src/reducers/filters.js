import { createReducer } from "@reduxjs/toolkit"
import { heroFilter } from '../actions/index'
const initialState = {
    heroesLoadingStatus: 'idle',
    filters: [{
        water: true,
        fire: true,
        wind: true,
        earth: true
    }]
}

const filters = createReducer(initialState, builder => {
    builder
        .addCase(heroFilter, (state, action) => { 
            state.filters = action.payload
            state.heroesLoadingStatus = 'idle'
        })
        .addDefaultCase(()=> {})
})
// const filters = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HERO_FILTER':
//             return {
//                 ...state,
//                 filters: [action.payload],
//                 heroesLoadingStatus: 'idle'
//             }
//             default: return state
//     }
// }

export default filters;