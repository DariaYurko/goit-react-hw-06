import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';

const ContsctList = () => {
  // Підписалися на state  зі Store
  const contacts = useSelector(state => state.contacts.contacts);
  const filtredContactValue = useSelector(state => state.filters.filterValue);
  
  const filtredContactList = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filtredContactValue.toLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {filtredContactList.map(contact => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact
              name={contact.name}
              phone={contact.number}
              contactId={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContsctList;
