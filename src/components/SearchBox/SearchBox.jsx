import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const sortId = useId();
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={css.conteiner}>
      <label htmlFor={sortId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        className={css.input}
        id={sortId}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
