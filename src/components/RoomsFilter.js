import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

const uniqueTypeRooms = (items, value) => {
    console.log(items, value, typeof items)
    return [...new Set(items.map(item => {
        return item[value]
    }))]
}

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context
    let types = uniqueTypeRooms(rooms, "type")
    types = ["all", ...types]
    let people = uniqueTypeRooms(rooms, "capacity")
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">form type</label>
                    <select name="type" id="type" value={ type } className="form-control" onChange={handleChange}>
                        { types.map((item, index) => <option key={index} value={item}>{ item }</option>) }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select name="capacity" id="type" value={ capacity } className="form-control" onChange={handleChange}>
                        { people.map((item, index) => <option key={index} value={item}>{ item }</option>) }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Rooms Price ${ price }</label>
                    <input type="range" name="price" min={ minPrice } max={ maxPrice } onChange={ handleChange } value={ price } className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Rooms Size</label>
                    <input type="number" name="minSize" onChange={ handleChange } value={ minSize } className="size-input" />
                    <input type="number" name="maxSize" onChange={ handleChange } value={ maxSize } className="size-input" />
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={ breakfast } onChange={ handleChange }  />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={ pets } onChange={ handleChange } />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default RoomsFilter