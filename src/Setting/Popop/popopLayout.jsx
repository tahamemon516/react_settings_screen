import React from 'react'
import "./Popop.css"

const PopopLayout = ({tittle, children }) => {
  return (
    <div>
      <div className='pop-main-cont'>
        <div className='pop-iner-cont'>
          <div className='pop-card-cont'>
            <div className=''>
                {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopopLayout
