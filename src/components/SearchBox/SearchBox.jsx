import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const sortId = useId();

  const dispatch = useDispatch();

  return (
    <div className={css.conteiner}>
      <label htmlFor={sortId}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        id={sortId}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
