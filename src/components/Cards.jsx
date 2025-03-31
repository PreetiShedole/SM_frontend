import React from 'react';



function Cards({cardData}) {
  return (
    <div className=" text-white w-[410px] h-[192px] rounded-lg bg-[#374151] hover:bg-gray-600 
    active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300... shadow-2xl
     hover:shadow-lg hover:scale-105 transition-all duration-300 p-4 flex flex-col items-start">
      <img src={cardData.icon} className="image pl-4 pt-4"/>
      <h3 className="text-white text-lg flex flex-col p-4 font-roboto">{cardData.name}</h3>
      <p className="opacity-65 pl-4 font-roboto">{cardData.description}</p>
      
    </div>
 
  )
}

export default Cards;