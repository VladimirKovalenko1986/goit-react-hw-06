import css from "./App.module.css";
import Title from "../Title/Title";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  return (
    <div className={css.conteiner}>
      <Title text="Phonebook" />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
