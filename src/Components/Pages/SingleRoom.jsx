import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {GlobalContext} from '../../Context'


const SingleRoom = () => {
  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(true);
  const {getSingleRoom} = useContext(GlobalContext);
  const {slug} = useParams();

  useEffect(() => {
    if(slug){
      const rm = getSingleRoom(slug);
      setRoom(rm);
    }
    setLoading(false);
  }, [slug, getSingleRoom]);



  return (
    <>
      {loading ? <p>Loading...</p> : (

    <div className="single-room">
      <div className="single-room-images">
        {room.images.map((image, index) => (
          <img key={index} src={image} alt={`room ${index}`} />
        ))}
      </div>
      <div className="single-room-info">
        <article className="description">
          <h3>Details</h3>
          <p>{room.description}</p>
        </article>
        <article className="info">
          <h3>Info</h3>
          <h6>Price: ${room.price}</h6>
          <h6>Size: ${room.size} SQFT</h6>
          <h6>Max Capacity: ${room.capacity}</h6>
          <h6>Pets: ${room.pets ? 'allowed' : 'not allowed'}</h6>
        </article>
        
      </div>
    </div>

      )} 
    </>
  );
}
    

export default SingleRoom;