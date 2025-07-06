import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../slice/contactsSlice'
import  filterReducer  from '../slice/filterSlice'

export default configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer
  },
})