import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchId}>
        Search
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        value={filter}
        id={searchId}
        onChange={handleChange}
      />
    </div>
  );
}
