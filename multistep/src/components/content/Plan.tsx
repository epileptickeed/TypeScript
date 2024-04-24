import { useState } from 'react'
import plans from '../../../data/plans.json'

const Plan = () => {

  const [planActive, setPlanActive] = useState(0)
  const [monthly, setMonthly] = useState(false)
  

  return (
    <div className='plan'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plan_list">
        {plans.map((item,index) => {
          return (
            <div key={index} className={planActive === index ? 'plan_card_active' : 'plan_card'}
              onClick={() => setPlanActive(index)}
            >
              <img src={item.img} alt={item.title} />
              <div className="plan_card__info">
                <span>{item.title}</span>
                <p>${monthly ? `${item.priceYearly}/yr` : `${item.priceMonthly}/mo`} </p>
                {monthly ? 
                  (<div>2 months free</div>)
                : 
                ('')}
              </div>
            </div>
          )
        })}
      </div>
      <div className="billing">
        <span>Monthly</span>
        <div className="range" data-ison={monthly} onClick={() => setMonthly(!monthly)}>
          <div className="circle"></div>
        </div>
        <span>Yearly</span>
      </div>
    </div>
  )
}

export default Plan