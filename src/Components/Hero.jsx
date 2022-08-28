import React from "react"
import Heading from "./Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Luxurious Rooms ' subtitle='Deluxe Rooms At $299' />

          <form className='flex'>
            <div className='box'>
              <span>Features</span>
              <input type='text' placeholder='Features' />
            </div>
            <div className='box'>
              <span>Room Type</span>
              <input type='text' placeholder='Room Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
