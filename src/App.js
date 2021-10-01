import React, { /*useState,*/ useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Filter from "./components/Filter/Filter.js";
import ContactList from "./components/ContactList/ContactList.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch, connect } from "react-redux";
//import { addContact, deleteContact /*, changeFilter*/ } from "./redux/actions";
import * as contactsActions from "./redux/actions";
import * as contactsOperations from "./redux/operations";

function App() {
  //const fullState = useSelector((state) => state);
  //console.log(fullState);
  const contacts = useSelector((state) => state.contacts);
  //const filter = useSelector((state) => state.filter);
  //const [filter, setFilter] = useState(() => { return ""; });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onAddContact = (name, number) => {
    const selectedContact = contacts.filter((contact) => {
      return contact.name === name;
    });
    if (selectedContact.length > 0) {
      alert(name + " is already in contacts");
    } else {
      dispatch(contactsOperations.addContact({ id: uuidv4(), name, number }));
    }
  };

  const onChangeFilter = (filter) => {
    dispatch(contactsActions.changeFilter(filter));
    //setFilter(filter);
  };

  const onDeleteContact = (contactId) => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter onChange={onChangeFilter} />
      <ContactList onDelete={onDeleteContact} />
    </div>
  );
}

/*contacts={contacts}
  filter={filter}*/

export default connect()(App);
