import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='personal_info'>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <form action="">
        <label htmlFor="name">Name<br />
          <input type="text" id='name' placeholder='Vanessa Mint' />
        </label>
        <label htmlFor="email">Email Adress<br />
          <input type="email" id='email' placeholder='vanessamint@gmail.com' />
        </label>
        <label htmlFor="phone">Phone Number<br />
          <input type="phone" id="phone" placeholder='e.g. +1 234 567 890' />
        </label>
      </form>

    </div>
  )
}

export default PersonalInfo