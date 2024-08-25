import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { addContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const fieldValues = {
  username: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const name = values.username;
    const number = values.number;
    
    const userProfile = {
      id: nanoid(),
      name,
      number,
    };
      // 1. Створення команди
      const action = addContact(userProfile);
      // 2. Доставка команди в Store
      dispatch(action);
      
      actions.resetForm();
    };
  
  return (
    <Formik
      initialValues={fieldValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.contactForm}>
        <label className={css.label}>
          <span className={css.labelName}>Name</span>
          <Field
            name="username"
            type="text"
            placeholder="Enter name"
            className={css.field}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
        </label>

        <label className={css.label}>
          <span className={css.labelName}>Phone</span>
          <Field
            name="number"
            type="tel"
            placeholder="Enter phone"
            className={css.field}
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
