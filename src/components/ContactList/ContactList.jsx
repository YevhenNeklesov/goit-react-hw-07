import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"
import { selectNameFilter } from "../../redux/filtersSlice"
import s from './ContactList.module.css'
import Contact from "../Contact/Contact"

const ContactList = () => {
    const contacts = useSelector(selectContacts)
    
    const searchName = useSelector(selectNameFilter)
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase().trim()))


    return (
        <ul className={s.ul}>
            {filteredContacts.map(item => (
                <li className={s.li} key={item.id}>
                    <Contact name={item.name} phone={item.number} id={item.id} createdAt={item.createdAt}/>
                </li>
            ))}
      </ul>

  )
}

export default ContactList