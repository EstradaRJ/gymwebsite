import React from 'react';

function Contact() {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type='text' placeholder='Name' required/>
            <input type='email' placeholder='Email' required/>
            <textarea placeholder='Leave a Message ...' required></textarea>
            <button type='submit' value='Send'></button>
        </form>
    </div>
  )
}

export default Contact;