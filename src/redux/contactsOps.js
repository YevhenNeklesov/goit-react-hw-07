import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = 'https://6714e6bf690bf212c762e379.mockapi.io/'


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const { data } = await axios.get('contacts')
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (body, thunkApi) => {
    try {
        const { data } = await axios.post('contacts', body)
        return data
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact ", async (id, thunkApi) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`)
        return data.id
    } catch (err) {
        return thunkApi.rejectWithValue(err.message)
    }
})

