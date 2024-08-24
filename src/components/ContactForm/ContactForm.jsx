import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);

    const name = values.username;
    const number = values.number;
    // console.log(name);
    // console.log(phone);

    const userProfile = {
      name,
      number,
    };

    onAddContact(userProfile);
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
