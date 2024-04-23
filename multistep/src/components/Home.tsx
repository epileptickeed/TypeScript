import React, { useState } from 'react'
import steps from '../../data/steps.json'
import content from '../../data/content.json'
import PersonalInfo from './content/PersonalInfo'
import Plan from './content/Plan'

const Home = () => {

    const [isActive, setIsActive] = useState(0)

    const handleClick = (id: number) => {
        setIsActive(id)
    }

    const content = [ <PersonalInfo />, <Plan />]

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
                        <div key={index} className={isActive === index ? 'conetent_cart' : 'notActive'}>
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Home