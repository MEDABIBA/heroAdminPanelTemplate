    import { useState } from "react";
    import { useDispatch } from "react-redux";

    import { heroFilter } from "./heroesFiltersSlice";
    // Задача для этого компонента:
    // Фильтры должны формироваться на основании загруженных данных
    // Фильтры должны отображать только нужных героев при выборе
    // Активный фильтр имеет класс active
    // Изменять json-файл для удобства МОЖНО!
    // Представьте, что вы попросили бэкенд-разработчика об этом

    const HeroesFilters = () => {
        const [filters, setFilters] = useState({
            water: false,
            fire: false,
            wind: false,
            earth: false
        });
        const dispatch = useDispatch()
        
        const allToggle = ()=>{
            const allFilters = { water: true, fire: true, wind: true, earth: true };
            setFilters(allFilters);
            dispatch(heroFilter({water: true, fire: true, wind: true, earth: true}))
        }

        const toggleFilter = (element) =>{
            const newFilters = {
                water: false,
                fire: false,
                wind: false,
                earth: false,
                [element]: true
            } 
            setFilters(newFilters)
            dispatch(heroFilter(newFilters))
        }
        return (
            <div className="card shadow-lg mt-4">
                <div className="card-body">
                    <p className="card-text">Отфильтруйте героев по элементам</p>
                    <div className="btn-group">
                        <button onClick={()=>allToggle()} className="btn btn-outline-dark active">Все</button>
                        <button onClick={()=>toggleFilter('fire')} className={`${filters.fire ? "active btn btn-danger" : null} btn btn-danger `}>Огонь</button>
                        <button onClick={()=>toggleFilter('water')} className={`${filters.water ? "active btn btn-primary" : null} btn btn-primary`}>Вода</button>
                        <button onClick={()=>toggleFilter('wind')} className={`${filters.wind ? "active btn btn-success" : null} btn btn-success`}>Ветер</button>
                        <button onClick={()=>toggleFilter('earth')} className={`${filters.earth ? "active btn btn-secondary" : null} btn btn-secondary`}>Земля</button>
                    </div>
                </div>
            </div>
        )
    }

    export default HeroesFilters;