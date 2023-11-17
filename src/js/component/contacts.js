import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

function ContactList() {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getContacts();
  }, [actions]);

  const handleDeleteContact = (contact) => {
    actions.deleteContact(contact);
  };

  const handleUpdateContact = (contact) => {
    actions.updateContact(contact);
  };

  const handleChangeView = () => {
    navigate("/Contactform");
  };

  console.log(store.contacts);

  return (
    <div>
      <h2>Contact List</h2>
      {store.contacts && store.contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <h3>{contact.fullname}</h3>
          <p>Email: {contact.email}</p>
          <p>Address: {contact.address}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => handleDeleteContact(contact)}>Delete</button>
          <button onClick={() => handleUpdateContact(contact)}>Update</button>
          <button onClick={handleChangeView}>Create a contact</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
