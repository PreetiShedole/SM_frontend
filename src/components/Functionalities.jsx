import React from 'react';
import Cards from './Cards';

function Functionalities({functionalities}) {
  return (<div>
    

    <div className='bg-[#1F2937] flex flex-col items-center pb-9'>
      <div className='text-white w-max h-[120px] pt-4 flex items-center text-[25px] font-bold font-roboto'>
      <h2>Quick Actions</h2>
     </div>

    <div className='grid grid-cols-3  gap-7 p-7'>

      {
        functionalities.map((func) => {
          return <Cards cardData = {func} ></Cards>
                     
          }
        )



      }
    </div>



  </div>

      </div>
    
   


  );
}

export default Functionalities;