import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

const App = () => {
    
    return (
        <main className="app">
            <div className="content">
                <HeroesList/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
}

export default App;

//ImportantThings:
// Сделать добавления персонажей
//сделать фильтрацию, при нажатии на фильтры, елемент должен затемняться    
//сделать удаление персонажа из общего состояния 

//secondary:
//сделать анимацию появления item-ов при помощи React Transition Group
//Сделать чтобы при удалении персонажа, персонаж удалялся с json
//Сделать чтобы при добавлении персонажа, персонаж добавлялся в json