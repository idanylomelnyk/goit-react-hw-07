import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
