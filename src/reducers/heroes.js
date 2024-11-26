import { createReducer } from "@reduxjs/toolkit"
import { heroesFetching, heroesFetched, heroAdd, heroesDelete, heroesFetchingError} from '../actions/index'
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}



const heroes = createReducer(initialState, builder => {
    builder
        .addCase(heroesFetching, state => { 
            state.heroesLoadingStatus = 'loading'
        })
        .addCase(heroesFetched, (state, action) => { 
            state.heroes = action.payload
            state.heroesLoadingStatus = 'idle'
        })
        .addCase(heroAdd, (state, action) => { 
            state.heroes.push(action.payload)
            state.heroesLoadingStatus = 'idle'
        })
        .addCase(heroesDelete, (state, action) => { 
            const deletedHero = state.heroes.filter(state=> action.payload !== state.id);
            state.heroes = deletedHero
            state.heroesLoadingStatus = 'idle'
        })
        .addCase(heroesFetchingError, state => { 
            state.heroesLoadingStatus = 'error'
        })
        .addDefaultCase(()=> {})
})
// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HERO_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],

//             }
//         case 'HEROES_DELETE':
//             const deletedHero = state.heroes.filter(state=> action.payload !== state.id);
//             return {
//                 ...state,
//                 heroes: deletedHero,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         default: return state
//     }
// }

export default heroes;