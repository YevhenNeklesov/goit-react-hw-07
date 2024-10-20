
import { useDispatch, useSelector } from "react-redux"
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice"
import s from './SearchBox.module.css'

const SearchBox = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectNameFilter)
  return (
      <div className={s.container}>
          <label className={s.label}>Search contact
        <input
          className={s.input}
          placeholder="Enter contact name"
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
          </label>
    </div>
  )
}

export default SearchBox