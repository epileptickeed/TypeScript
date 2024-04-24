import React from 'react'
import addons from '../../../data/addons.json'

const Addons = () => {
  return (
    <div className='addons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addons_list">
        {addons.map((item, index) => {
          return (
            <div key={index}>
              <input type="checkbox" />
              <div className='addons_info'>
                <span>{item.title}</span>
                <p>{item.subtitle}</p>
              </div>
              <span></span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Addons