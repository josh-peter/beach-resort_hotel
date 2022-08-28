import { useContext } from 'react';
import { GlobalContext } from '../Context';
import Room from './Room';
import Title from './Title1';



const FeaturedRoom = () => {

  const { featuredRooms } = useContext(GlobalContext);

  	


  return(
      <section className="featured-rooms">
        <Title title="Featured rooms" />
        <div className="featured-rooms-center">
          {featuredRooms.map(item => 
            (
              <Room key={item.id} room={item} />
            )
          )}
        </div>
      </section>
  )
}

export {FeaturedRoom}
