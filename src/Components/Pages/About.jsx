import React from 'react';
import Back from '../Blog/Back';
import Heading from '../Blog/Heading';
import img from "../../images/about.jpg"
import image from "../../images/DefaultBcg.jpeg"
import {Link} from "react-router-dom"
import Footer from '../Footer';
import NavBar from '../NavBar';

const Blog = () => {
  return (
    <>
    <NavBar/>
    <section className='about'>
      <Back name='About Us' title='About Us - Who We Are?' cover={img} 
      />
      <div className='container flex mtop'>
        <div className='left row'>
          
          <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <Link to = "/">
          <button className='btn2'>Return Home</button>
          </Link>
          
        </div>
        <div className='right row'>
          <img src={image} alt='' />
        </div>
      </div>
    </section>
    <Footer/>
  </>
  )
}

export default Blog