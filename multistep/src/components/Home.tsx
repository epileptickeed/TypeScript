import steps from '../../data/steps.json'
import PersonalInfo from './content/PersonalInfo'
import Plan from './content/Plan'
import Addons from './content/Addons'
import Summary from './content/Summary'
import { UseMainContext } from '../../context/MainContext'
import Confirm from './content/Confirm'
const Home = () => {

    const { isActive, setIsActive, handleClick } = UseMainContext()


    const content = [ 
        <PersonalInfo />, 
        <Plan />, 
        <Addons />,
        <Summary />,
        <Confirm />
      ]


  return (
    <div className='main_wrapper'>
        <div className="main__inner">
            <div className="steps">
                {steps.map( (item, index) => {
                    return (
                        <div key={index} className='steps_card'
                            onClick={() => handleClick(item.id)}
                        >
                            <div className= {isActive === index ? 'steps_id_active' : 'steps_id'}>
                                <p>{item.id + 1}</p>
                            </div>
                            <div className="steps_info">
                                <span>{item.currentStep}</span>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="content">
                {content.map((item, index) => {
                    return (
                        <div key={index} className={isActive === index ? 'content_card' : 'notActive'}>
                            {item}

                            <button className={isActive === 0 || isActive === 4 ? 'notActive' : 'goback'}
                            onClick={() => setIsActive(cur => cur - 1)}
                            >Go Back</button>
                            <button className={isActive === 3 || isActive === 4 ? 'notActive' : 'next'}
                            onClick={() => setIsActive(cur => cur + 1)}
                            >Next Step</button>
                        </div>
                    )
                })}

            </div>
        </div>
    </div>
  )
}

export default Home