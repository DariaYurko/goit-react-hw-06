import './App.css';

import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from './redux/filtersSlice';
import { addContact, deleteContact } from './redux/contactsSlice';

const App = () => {

  // Підписалися на state  зі Store
  const contacts = useSelector(state => state.contacts.contacts);
  const filtredContactValue = useSelector(state => state.filters.filterValue);
  const dispatch = useDispatch();

  const onAddContact = contact => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    // 1. Створення команди
    // 2. Доставка команди в Store
    const acion = addContact(finalContact);
    dispatch(acion);
  };

  const onDeleteContact = contactId => {
    // 1. Створення команди
    // 2. Доставка команди в Store
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const onInputChange = event => {
    const value = event.target.value;
    // 1. Створення команди
    // 2. Доставка команди в Store
    const action = changeFilter(value);
    dispatch(action);
  };

  const filtredContactList = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filtredContactValue.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm onAddContact={onAddContact} />

      <SearchBox
        filtredContactValue={filtredContactValue}
        handleChange={onInputChange}
      />

      <ContactList
        contacts={filtredContactList}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
