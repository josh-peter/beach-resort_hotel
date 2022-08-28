import React, { useState, useEffect } from "react";
import Data from "./Data";


const GlobalContext = React.createContext();

const Provider = ({ children }) => {
  const [state, setState] = useState({
    rooms:   localStorage.getItem('rooms') ? JSON.parse(localStorage.getItem('rooms')) : [],
    featuredRooms: [],
    filteredRooms: [],
    loading:false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  useEffect(() => {
    newData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newData = () => {
    const Rooms = Data.map(room => ({
      id: room.sys.id,
      slug: room.fields.slug,
      name: room.fields.name,
      description: room.fields.description,
      capacity: room.fields.capacity,
      price: room.fields.price,
      extras: room.fields.extras,
      featured: room.fields.featured,
      images: room.fields.images.map((image) => image.fields.file.url),
      breakfast: room.fields.breakfast,
      pets: room.fields.pets,
      type: room.fields.type,
      size: room.fields.size,
    }));

    const featuredRooms = Rooms.filter((room) => room.featured === true)

         const prices = Rooms.map((room)=> room.price)
         const maxPrice = Math.max(...prices)
        
         const sizes = Rooms.map((room)=> room.size)
         const maxSize = Math.max(...sizes)
         const minSize = Math.min(...sizes)

         console.log(maxSize, maxPrice)



     setState({
        ...state,
        rooms: Rooms,
        featuredRooms,
        filteredRooms:Rooms,
        type: "all",
        capacity: 1,
        loading:false,
        maxPrice,
        maxSize,
        minSize,
        price:maxPrice
      });
      localStorage.setItem("rooms", JSON.stringify(Rooms));
  };


  const changeHandler = (e) =>{
    //  const {value,name} = e.target
    //  console.log(value, name)
    const type = e.target.type
    const name = e.target.name;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
     console.log(name, value)
     setState({
       ...state,
       [name]:value
     })

     let filteredRM = [...state.rooms]
     console.log(filteredRM)

     if(name === 'type' && value !== 'all'){
       // console.log('filtecopy', copy)
        filteredRM = filteredRM.filter((room) => room.type === value)
       //  console.log('filtered', filtered)
     }

     if(name === 'capacity' && parseInt(value) !== 1){
       // console.log('filtecopy', copy)
        filteredRM = filteredRM.filter((room) => room.capacity === parseInt(value))
       //  console.log('filtered', filtered)
     }

     if(name === 'price' ){
       // console.log('filtecopy', copy)
        filteredRM = filteredRM.filter((room) => room.price <= state.price && room.price <= state.maxPrice)
       //  console.log('filtered', filtered)
     }
       // console.log('filtecopy', copy)
        filteredRM = filteredRM.filter((room) => room.size >= parseInt(state.minSize) && room.size <=  parseInt(state.maxSize))
       //  console.log('filtered', filtered)
     
       if(type === 'checkbox'){
          filteredRM = filteredRM.filter((room) => room.pets === true && room.breakfast === true)
       }


       setState((prev)=> ({
          ...prev,
          filteredRooms:filteredRM
       }))
    //  setState({
    //    ...state,
    //    filteredRooms:filteredRM
    //  })
   }
  
    

  const getSingleRoom = (slug) =>{
    const Rooms = [...state.rooms];
    return Rooms.find(room => room.slug === slug);
  }






  



  return (
    <GlobalContext.Provider value={{ ...state, changeHandler,getSingleRoom}}>
      {children}
    </GlobalContext.Provider>
  );
};

const Consumer = GlobalContext.Consumer;

export { GlobalContext, Provider, Consumer };
