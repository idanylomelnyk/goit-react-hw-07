import ContactList from "../ContactList/ConctactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ConctactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";
import { selectError, selectLoading } from "../../redux/contactsSlice";



export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <div className={css.inner}>
          <ContactForm />
          <SearchBox />
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className={css.error}>Error: {error}</p>}
        <ContactList />
      </div>
    </div>
  );
}
