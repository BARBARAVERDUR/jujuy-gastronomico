import React from 'react'
import { Dish } from './dish'
import  './Dishes.css'

export const Dishes = ({dishes}) => {
  return (
    <div className='dishes-container'>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  )
}
