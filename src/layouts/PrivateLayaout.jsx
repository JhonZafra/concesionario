import Sidebar from 'components/Sidebar'
import React from 'react'

const PrivateLayaout = ({ children }) => {
  return (
    <div>
        <Sidebar />
        { children }
    </div>
  )
}

export default PrivateLayaout