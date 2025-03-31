import React from 'react'
import LatestCard from './LatestCard';

function LatestUpdates({latestUpdates}) {
  return (
    <>

     <div className=' w-full h-[316px] bg-gray-900 flex flex-col items-center'>

          <div className='text-white w-max h-[110px] pt-8 flex items-center text-[25px] font-bold font-roboto'>
            <h3>Latest Updates</h3>
          </div>

          <div className='grid grid-cols-3 gap-4 p-7 shadow-2xl' >
           {
                latestUpdates.map((updates) => {
                    return <LatestCard lcard = {updates}> </LatestCard>
                }
            )

           }

          </div>
            

     </div>
        
        
    </>
  )
}

export default LatestUpdates;