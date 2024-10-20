import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import {fetchContacts, addContact, deleteContact} from './contactsOps'

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  }
}


const slice = createSlice({
    name: 'contacts',
    initialState,
        extraReducers: builder => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload)
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload)
            })

            .addMatcher(isAnyOf(fetchContacts.pending), (state) => {
                state.contacts.loading = true
            })
            .addMatcher(isAnyOf(fetchContacts.fulfilled), (state) => {
                state.contacts.loading = false
            })
            .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected), (state, action) => {
                state.contacts.loading = false
                state.contacts.error = action.payload
            })
    }
})


export const selectContacts = state => state.contact.contacts.items
export const selectLoading = state => state.contact.contacts.loading
export const selectError = state => state.contact.contacts.error
export const contactsReducer = slice.reducer