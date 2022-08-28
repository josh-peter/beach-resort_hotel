import React, { useContext } from 'react';
import { GlobalContext } from '../Context';
import Rooms  from './Rooms';


const RoomList = () => {

  const { filteredRooms  } = useContext(GlobalContext);

  return (
    <section className="featured-rooms">
        <div className="featured-rooms-center">
          {filteredRooms.map(item => ((
              <Rooms key={item.id} room={item} />
            )
          ))}
        </div>
      </section>
  )
}

export default RoomList