import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js"; 
=
function ContactList() {
  
  const { getContacts, deleteContact, updateContact } = useContext(Context); 

  // const contacts = getContacts();
  const { store, actions } = useContext(Context);
  

  const handleDeleteContact = (contact) => {
    action.deleteContact(contact);
   
  };

  const handleUpdateContact = (contact) => {
    action.updateContact(contact);
  
  };

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <h3>{contact.fullname}</h3>
          <p>Email: {contact.email}</p>
          <p>Address: {contact.address}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => handleDeleteContact(contact)}>Delete</button>
          <button onClick={() => handleUpdateContact(contact)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;