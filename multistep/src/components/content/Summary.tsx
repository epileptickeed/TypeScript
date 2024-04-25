import { UseMainContext } from '../../../context/MainContext'

const Summary = () => {

  const { planInfo, planPrice, yearly, setIsActive } = UseMainContext()

  return (
    <div className='summary'>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>

      <div className="bill">
        <div className="bill_info">
          <h3>{planInfo}{yearly ? `(Yearly)` : `(Monthly)`}</h3>
          <p onClick={() => setIsActive(1)}>Change</p>
        </div>
        <div className="bill_price">
          <h3>{planPrice}</h3>
        </div>
      </div>
      <div className="bonuses">
        
      </div>
    </div>
  )
}

export default Summary