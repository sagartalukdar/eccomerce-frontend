import React from 'react'
import { Route, Routes } from 'react-router'
import Admin from '../../../../Admin/Components/Admin'

const AdminRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>}/>
      </Routes>
    </div>
  )
}

export default AdminRouter
