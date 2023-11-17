import React, { useState } from 'react';

import '../../styles/contactform.css';
function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  
  const createContact = () => {
    

    // Your fetch code here
    fetch("https://playground.4geeks.com/apis/fake/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "full_name": fullname,
        "email": email,
        "agenda_slug": "tomtom",
        "address": address,
        "phone": phone,
      }),
    })
      .then((response) => {
        // Handle the response as needed
        console.log(response);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div className='contactform'>
      <h2>Create Contact</h2>
      <div>
        <label>Full Name:</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button onClick={createContact}>Create Contact</button>
    </div>
  );
}

export default ContactForm;
