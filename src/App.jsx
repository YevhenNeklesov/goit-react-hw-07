
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'
import { selectError, selectLoading } from './redux/contactsSlice'



function App() {
  
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading</h2>}
      {error && <h2>Error</h2>}
      <ContactList/>
    </>
  )
}

export default App
