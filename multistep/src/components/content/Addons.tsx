import { useState } from 'react'
import addons from '../../../data/addons.json'
import { UseMainContext } from '../../../context/MainContext'

type TitlesTypes = {
  title: string,
  priceMonthly: number,
  priceYearly: number,
}

const Addons = () => {

  const { yearly } = UseMainContext()

  const [isChecked, setIsChecked] = useState(Array(addons.length).fill(false))
  const [allTitles, setAllTitles] = useState<TitlesTypes[]>([])

  const handleAddons = (index: number, title: string, priceMonthly: number, priceYearly: number) => {
    const newCheckedItems = [...isChecked];
    newCheckedItems[index] = !newCheckedItems[index]
    setIsChecked(newCheckedItems)
    
    const existingTitle = title
    if(!allTitles.some(item => item.title === existingTitle)){
      setAllTitles(current => {
        return [
          ...current,
          {title: title, priceMonthly: priceMonthly, priceYearly: priceYearly}
        ]
      })
    }
  }
  

  return (
    <div className='addons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addons_list">
        {addons.map((item, index) => {
          return (
            <div key={index} className='addons_card'
              onClick={() => handleAddons(index, item.title, item.priceMonthly, item.priceYearly)}
            >
              <div className='addons_info'>
                <input type="checkbox" checked={isChecked[index]} readOnly/>
                <div className="addons_titles">
                  <span>{item.title}</span>
                  <p>{item.subtitle}</p>
                </div>
              </div>
              <span>{yearly ? `${item.priceYearly}$/yr` : `${item.priceMonthly}$/mo`}</span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Addons