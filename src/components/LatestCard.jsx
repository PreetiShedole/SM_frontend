import React from 'react'


function LatestCard({lcard}) {
  return (
    <div>
        
         <div className='w-full h-[180px]'>

        <div className=' w-[410px] h-[88px] bg-[#1F2937] rounded-md flex flex-col items-start gap-0'>
            <h5 className="text-lg flex flex-col p-4 font-roboto text-[16px] text-black font-bold">{lcard.Heading}</h5>
           <p className='text-white opacity-65 pl-4 font-roboto text-[16px]'>{lcard.Description}</p> 
        </div>

        </div>
        













    </div>
  )
}

export default LatestCard