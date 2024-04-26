import { UseMainContext } from '../../../context/MainContext'

const Summary = () => {

  const { planInfo, planPrice, yearly, setIsActive, allTitles, total } = UseMainContext()

  const handleConfirm = () => {
    if(planInfo) {
      setIsActive(4)
    } return false
  }  

  return (
    <div className='summary'>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>

      <div className="bill">
        <div className="bill_inner">
          <div className="bill_info">
            <h3>{planInfo ? planInfo : `Arcade`}{yearly ? `(Yearly)` : `(Monthly)`}</h3>
            <p onClick={() => setIsActive(1)}>Change</p>
          </div>
          <div className="bill_price">
            <h3>${planPrice}{yearly ? `(yr)` : `(mo)`}</h3>
          </div>
        </div>
        <hr />
        <div className="bonuses">
          {allTitles.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
                <h4>{yearly ? `+$${item.priceYearly}/yr` : `+$${item.priceMonthly}/mo`}</h4>
              </div>
            )
          })}
        </div>
      </div>
      <div className="total">
        <p>Total per month</p>
        <h1>${total}{yearly ? `/yr` : `/mo`}</h1>
      </div>
      <button className="next" onClick={() => handleConfirm()}>
        Confirm
      </button>
    </div>
  )
}

export default Summary