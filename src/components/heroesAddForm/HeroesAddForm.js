import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {heroAdd} from "../heroesList/heroesSlice"
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [elem, setElem] = useState('')
    const dispatch = useDispatch()
    // console.log(name)
    // console.log(desc)
    // console.log(elem)
    const onSubmit = (e)=>{
        if(name !== '' && desc !== '' && elem !== ''){   
            e.preventDefault()
            dispatch(heroAdd({
                "id": uuidv4(),
                "name": name,
                "description": desc,
                "element": elem
            }))
            setName('')
            setDesc('')
            setElem('')
        }
    }
    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={e=>setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={desc}
                    onChange={e=>setDesc(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={elem}
                    onChange={e=>setElem(e.target.value)}>
                    <option value="">Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary" onClick={(e)=>onSubmit(e)}>Создать</button>
        </form>
    )
}

export default HeroesAddForm;