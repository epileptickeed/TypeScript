import addons from '../../../data/addons.json'
import { UseMainContext } from '../../../context/MainContext'



const Addons = () => {

  const { yearly, handleAddons, isChecked } = UseMainContext()

  
  

  return (
    <div className='addons'>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className="addons_list">
        {addons.map((item, index) => {
          return (
            <div key={index} className='addons_card'
              onClick={() => handleAddons(index, item.title, item.priceMonthly, item.priceYearly, isChecked[index])}
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