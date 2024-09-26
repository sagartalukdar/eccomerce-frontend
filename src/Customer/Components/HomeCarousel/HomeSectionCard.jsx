import React from 'react'

const HomeSectionCard = ({item}) => {
  return (
    <div className='cursor-pointer flex flex-col border items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      
      <div className="h-[13rem] w-[10rem]">
        <img src={item.imageUrl} alt="" className="object-cover object-top w-full h-full" />
      </div>

      <div className="p-4">
        <h3 className='text-lg font-medium text-gray-900'>{item.brand}</h3>
        <p className='mt-2 text-sm text-gray-900'>{item.title}</p>
      </div>

    </div>
  )
}

export default HomeSectionCard