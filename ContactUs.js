
import React, { useState } from 'react'
import './ContactUs.css';

function ContactUs() {
  const [userData, setUserData] = useState(
    {
      Name: '', Email: '', Subject: '', Message: ''
    }
  )
  let name, value
  console.log(userData)
  const data = (e) =>
  {
      name = e.target.name
      value = e.target.value
      setUserData({...userData, [name]:value})
  }

  const send = async(e) =>
  {
      const {Name, Email, Subject, Message} = userData;
      e.preventDefault();
      const option = {
        method: 'POST',
        headers: {
          'Content-type': 'aplication/json'
        },
        body : JSON.stringify({
          Name, Email, Subject, Message 
        })
      }
      const res = await fetch('https://contact-us-efa3f-default-rtdb.firebaseio.com/Mesages.json', option)
      console.log(res)
      if(res)
      {
        alert("Message Sent !")
      }
  }
  return (
    <>  <h1  align='center'>Contact Us</h1>
<p class="contact-message">Thank you for your interest in reaching out to us. We value your feedback, inquiries, and suggestions. Please feel free to contact us using the information provided below or by filling out the contact form.</p>
      <div className='container-contactus'>
        <div className='contact-box'>
          <form method='POST'>
            <input type='text' name='Name' value={userData.Name} placeholder='Enter your Full Name' autoComplete='off' onChange={data} required ></input>
            <input type='text' name='Email' value={userData.Email} placeholder='Enter your Email' autoComplete='off' onChange={data} required ></input>
            <input type='text' name='Subject' value={userData.Subject} placeholder='Subject of Message' autoComplete='off' onChange={data} required ></input>
            <textarea value={userData.Message} name='Message' placeholder='Your Message' autoComplete='off' onChange={data} required ></textarea>
            <button onClick={send}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
