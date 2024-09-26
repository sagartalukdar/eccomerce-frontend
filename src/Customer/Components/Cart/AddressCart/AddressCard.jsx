import React from 'react'

const AddressCard = ({address}) => {
  return (
    <div>
      <div className='space-y-3'>
        <p className='font-semibold'>{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.stressAddress},{address?.city} ,{address?.state},{address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Phone number</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
