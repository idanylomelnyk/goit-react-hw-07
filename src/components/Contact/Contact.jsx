import {
  BsPersonCircle,
  BsFillTelephoneFill,
  BsXCircle,
} from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


export default function Contact({ name, number, id }) {

  const dispatch = useDispatch();
  const handleRemoveContact = id => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={css.card}>
      <div>
        <div className={css.row}>
          <span>
          <BsPersonCircle />
          </span>
          <p className={css.info}>{name}</p>
        </div>
        <div className={css.row}>
          <span>
            <BsFillTelephoneFill />
          </span>
          <p className={css.info}>{number}</p>
        </div>
      </div>
      <button className={css.button}
        onClick={() => {
          handleRemoveContact(id)
        }}
      >
        <BsXCircle className={css.btnIcon} />
      </button>
    </div>
  );
}
