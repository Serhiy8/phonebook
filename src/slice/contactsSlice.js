import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "../operations/operations";

const initialState = {
  contactsItems: [],
  isLoading: false,
  error: null
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState:{...initialState},
  extraReducers: builder =>{
    builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsItems = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = null;
        state.contactsItems.push(action.payload)
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.error = null;
        state.contactsItems = state.contactsItems.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)
  },
});

export default contactsSlice.reducer;