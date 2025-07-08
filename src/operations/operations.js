import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabase/supabase";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const {data, error} = await supabase.from('contacts').select();
      if(error) throw error
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
    try {
        const {data, error} = await supabase
        .from('contacts')
        .insert(newContact)
        .select()
        if(error) throw error;
        return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const {data, error} = await supabase
        .from('contacts')
        .delete()
        .eq('id', id)
        .select()
        if(error) throw error
      return data[0];
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);


// axios.defaults.baseURL = 'https://6867f9ead5933161d70a73e7.mockapi.io';

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContacts",
//   async (newContact, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", newContact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContacts",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );