import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsOps"
import s from './Contact.module.css'


const Contact = ({name, phone, id, createdAt}) => {
    const dispatch = useDispatch()

  return (       
    <>
        <p className={s.text}>Name: <br />{name}</p>
        <p className={s.text}>Phone: <br />{phone}</p>
        <p>Created: <br />{createdAt}</p>
        <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>Delete contact</button>
    </>        
  )
}

export default Contact