import {configureStore} from '@reduxjs/toolkit'
import heroes from '../components/heroesList/heroesSlice'
import filters from '../components/heroesFilters/heroesFiltersSlice';
// import reducer from '../reducers';

const stringMiddleware = ()=> (next) => (action) =>{ //Данный middleware может посылать строку
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})
// const store = createStore(combineReducers({heroes, filters}), compose(
//     applyMiddleware(thunk  , stringMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

export default store;