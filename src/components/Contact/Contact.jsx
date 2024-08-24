import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import css from './Contact.module.css'

const Contact = ({ contactId, name, phone, onDeleteContact }) => {
  return (
    <>
      <div className={css.profile}>
        <p className={css.name}>
          <FaUserCircle />
          {name}
        </p>
        <a href={`tel:${phone}`} className={css.phone}>
          <AiFillPhone />
          {phone}
        </a>
      </div>
      
      <button onClick={() => onDeleteContact(contactId)} className={css.button}>
        Delete
      </button>
    </>
  );
};

export default Contact;
