import React, {useContext} from 'react';
import Title from './Title2'
import {GlobalContext} from '../Context'



const RoomOpts = () => {

	const {rooms, maxPrice, maxSize, price, pets, minSize,breakfast, type, changeHandler} = useContext(GlobalContext)
     
    console.log('sortRoom',type)
    // types
    let majorTypes = rooms.map((room)=> room.type)

       majorTypes = new Set(majorTypes )

       majorTypes = ['all', ...majorTypes]


    const types = majorTypes.map((type, i) => (<option key={i} value={type}>{type}</option>))
  
  // capacity
  let majorCapacities = rooms.map((room)=> room.capacity)
  // console.log(majorCapacities)
      majorCapacities = new Set(majorCapacities)
     majorCapacities = [...majorCapacities]
  //  console.log(majorCapacities)

const capacities = majorCapacities.map((capacity, i) => (<option key={i} value={capacity}>{capacity}</option>))
    return (
    <section className="filter-container">
         <Title title='Search rooms'/>
         <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">Room type</label>
                <select name='type' id='type' onChange={changeHandler}>
                    {types}
                </select>
            </div>

            <div className="formGroup">
                <label htmlFor="capacity">Capacity</label>
                <select name='capacity' id='capacity' onChange={changeHandler}>
                    {capacities}
                </select>
            </div>

            <div className="formGroup">
                <label htmlFor="price">Room price {price}</label>
                <input type='range' value={price} name='price' id='price' min={0} max={maxPrice} onChange={changeHandler}/>
            </div>

            <div className="formGroup">
                <label htmlFor="size">room size</label>
                <input type='number' value={minSize} name='minSize' id='size' onChange={changeHandler}/>
                <input type='number' value={maxSize} name='maxSize' id='size'  onChange={changeHandler}/>
            </div>

            <div className="single-extra">
                <label htmlFor="pets">pets</label>
                <input type='checkbox' checked={pets} name='pets' id='pets' onChange={changeHandler}/>
                <label htmlFor="breakfast">breakfast</label>
                <input type='checkbox' checked={breakfast} name='breakfast' id='breakfast'  onChange={changeHandler}/>
            </div>
         </form>
    </section>
  )
}

export default RoomOpts