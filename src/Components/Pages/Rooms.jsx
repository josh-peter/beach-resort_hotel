import React from 'react';
import RoomsBanner from '../RoomsBanner';
import RoomOpts from '../RoomOpts';
import RoomList from '../RoomList';
import Footer from '../Footer';





const Rooms = () => {

	 return (
	 <div>
		<RoomsBanner hero="roomsHero"/>
      <RoomOpts />
	  <RoomList />
	  <Footer />
	 </div>
	);
}



export default Rooms;