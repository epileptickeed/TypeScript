import { useState } from 'react'
import addons from '../../../data/addons.json'
import { UseMainContext } from '../../../context/MainContext'

const Addons = () => {

  const { monthly } = UseMainContext()

  const [isChecked, setIsChecked] = useState(Array(addons.length).fill(false))

  const handleAddons = (index: number) => {
    const newCheckedItems = [...isChecked];
    newCheckedItems[index] = !newCheckedItems[index]
    setIsChecked(newCheckedItems)
  }

  return (
    <div className='addons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addons_list">
        {addons.map((item, index) => {
          return (
            <div key={index} className='addons_card'
              onClick={() => handleAddons(index)}
            >
              <div className='addons_info'>
                <input type="checkbox" checked={isChecked[index]} readOnly/>
                <div className="addons_titles">
                  <span>{item.title}</span>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <span>{monthly ? `${item.priceYearly}$/yr` : `${item.priceMonthly}$/mo`}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Addons