import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

import { fetchHeroes, filteredHeroesSelector } from '../heroesList/heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
    const {heroesLoadingStatus} = useSelector(state => state.heroes);
    const dispatch = useDispatch();

    const filteredHeroes = useSelector(filteredHeroesSelector);
    useEffect(() => {
        dispatch(fetchHeroes())

        // eslint-disable-next-line
    }, []);

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
    const renderHeroesList = (heroes) => {

        if (heroes.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }
        return heroes.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props}/>
        })
    }

    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;