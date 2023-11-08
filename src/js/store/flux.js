const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			createContact: (fullname, email, address, phone) => {
				fetch(" https://playground.4geeks.com/apis/fake/contact/tomtom", {
					method: 'POST', // or 'PUT', 'GET', 'DELETE', etc.
					headers: {
						'Content-Type': 'application/json',
						// Additional headers
					},
					body: JSON.stringify({
						fullname: fullname,
						email: email,
						address: address,
						phone: phone,
						//  agenda_slug:"tomtom"
					})
				})
				setStore({
					fullname: fullname,
					email: email,
					address: address,
					phone: phone
				})
			},
			getContacts: () => {
				return getStore().contacts
			},
			deleteContact: (contact) => {
				const store = getStore();
				// Filter the contacts to create a new array without the contact with the given email
				const updatedContacts = store.contacts.filter(contact => contact.email !== contact.email);

				// Update the store with the new contacts array
				setStore({ contacts: updatedContacts });
				fetch(" https://playground.4geeks.com/apis/fake/contact/{contact_id}",
					{
						method: "DELETE",
						headers: {
							'Content-Type': 'application/json',
							body: JSON.stringify(contact.id)
						}
					})
			},
			updatedContacts: (contact) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/{contact_id}", {
					method: 'PUT', // or 'PUT', 'GET', 'DELETE', etc.
					headers: {
						'Content-Type': 'application/json',
						// Additional headers
					},
					body: JSON.stringify({
						fullname: contact.fullname,
						email: contact.email,
						address: contact.address,
						phone: contact.phone,
						//  agenda_slug:"tomtom"
					})
				})
				setStore({
					fullname: contact.fullname,
					email: contact.email,
					address: contact.address,
					phone: contact.phone
				})
			}

		},
	};
}
export default getState;
