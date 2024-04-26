import plans from '../../../data/plans.json'
import { UseMainContext } from '../../../context/MainContext'

const Plan = () => {

  const { planActive, yearly, setYearly, setPlan } = UseMainContext()
  


  return (
    <div className='plan'>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plan_list">
        {plans.map((item,index) => {
          return (
            <div key={index} className={planActive === index ? 'plan_card_active' : 'plan_card'}
              onClick={() => setPlan(index, item.title, item.priceMonthly, item.priceYearly)}
            >
              <img src={item.img} alt={item.title} />
              <div className="plan_card__info">
                <span>{item.title}</span>
                <p>${yearly ? `${item.priceYearly}/yr` : `${item.priceMonthly}/mo`} </p>
                {yearly ? 
                  (<b>2 months free</b>)
                : 
                ('')}
              </div>
            </div>
          )
        })}
      </div>
      <div className="billing">
        <span>Monthly</span>
        <div className="range" data-ison={yearly} onClick={() => setYearly(!yearly)}>
          <div className="circle"></div>
        </div>
        <span>Yearly</span>
      </div>
    </div>
  )
}

export default Plan