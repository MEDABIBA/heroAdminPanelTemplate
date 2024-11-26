import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit"   
import {useHttp} from '../../hooks/http.hook';


const heroesAdapter = createEntityAdapter()

const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
})

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
// }



// export const fetchHeroes = (request) => (dispatch) => {
//     dispatch(heroesFetching()); 
//     request("http://localhost:3001/heroes")
//         .then(data => dispatch(heroesFetched(data)))
//         .catch(() => dispatch(heroesFetchingError()))
// }



export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    ()=>{
        const {request} = useHttp()
        return request("http://localhost:3001/heroes")
    }
    )

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroAdd: (state, action) => { 
            heroesAdapter.addOne(state, action.payload)
            state.heroesLoadingStatus = 'idle'
        },
        heroesDelete: (state, action) => { 
            // const deletedHero = state.heroes.filter(state=> action.payload !== state.id);
            // state.heroes = deletedHero
            heroesAdapter.removeOne(state, action.payload)
            state.heroesLoadingStatus = 'idle'
        },
        heroesFetchingError: state => { 
            state.heroesLoadingStatus = 'error'
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchHeroes.pending,  state => {state.heroesLoadingStatus = 'loading'})
        .addCase(fetchHeroes.fulfilled, (state,action) => {
            heroesAdapter.setAll(state, action.payload)
            state.heroesLoadingStatus = 'idle'  
        })
        .addCase(fetchHeroes.rejected, state => {
            state.heroesLoadingStatus = 'error';
        })
        .addDefaultCase(() => {})
    }
})

const {actions, reducer} = heroesSlice
export const {selectAll} = heroesAdapter.getSelectors(state => state.heroes)
export const filteredHeroesSelector = createSelector(
    (state) => state.filters.filters[0],
    selectAll,
    (filters, heroes) => heroes.filter(hero => filters.hasOwnProperty(hero.element) && filters[hero.element] === true)        
)  

export default reducer 
export const {heroesFetching, heroesFetched, heroAdd, heroesDelete, heroesFetchingError} = actions