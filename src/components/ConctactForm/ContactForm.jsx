import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const nameInputId = useId();
  const numberInputId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleSubmit = (values, actions) => {
    handleAddContact({ name: values.name, number: values.number });
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Invalid number")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <h2 className={css.title}>New contact</h2>
        <div className={css.row}>
          <label className={css.label} htmlFor={nameInputId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameInputId}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.row}>
          <label className={css.label} htmlFor={numberInputId}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberInputId}
          ></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <div className={css.wrapper}>
          <button className={css.button} type="submit">
            <FaCirclePlus className={css.btnIcon} />
          </button>
        </div>
      </Form>
    </Formik>
  );
}
