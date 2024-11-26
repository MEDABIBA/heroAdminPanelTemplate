import { heroesFetched,heroesFetchingError, heroesFetching } from "../components/heroesList/heroesSlice";
// import { createAction } from "@reduxjs/toolkit";
export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching()); 
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }
// export const heroesFetching = createAction('HEROES_FETCHING')

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }
// export const heroesFetched = createAction('HEROES_FETCHED')

// export const heroAdd = (hero) => {
//     return {
//         type: 'HERO_ADD',
//         payload: hero
//     }
// }
// export const heroAdd = createAction('HERO_ADD')

// export const heroFilter = (filter) => {
//     return {
//         type: 'HERO_FILTER',
//         payload: filter
//     }
// }
// export const heroFilter = createAction('HERO_FILTER')

// export const heroesDelete = (hero)=> {
//     return {
//         type: 'HEROES_DELETE',
//         payload: hero
//     }
// }
// export const heroesDelete = createAction('HEROES_DELETE')

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')