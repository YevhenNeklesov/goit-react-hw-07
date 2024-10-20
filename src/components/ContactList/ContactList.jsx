import { useSelector } from "react-redux"
import { selectFilteredContacts } from "../../redux/contactsSlice"
import s from './ContactList.module.css'
import Contact from "../Contact/Contact"

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts)

    return (
        <ul className={s.ul}>
            {contacts.map(item => (
                <li className={s.li} key={item.id}>
                    <Contact name={item.name} phone={item.number} id={item.id} createdAt={item.createdAt}/>
                </li>
            ))}
      </ul>

  )
}

export default ContactList