import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );

  return (
    <ul className={css.conteiner}>
      {filteredContacts.map((item) => (
        <li key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
}
