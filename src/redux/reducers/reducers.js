import { addContact, deleteContact, getAllContacts, filterContacts } from "../actions/actions";
import { createReducer } from "@reduxjs/toolkit";

const allReducers = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => [...state.filter(contact => contact.id !== payload)],
  [getAllContacts]: (_, { payload }) => payload
});

const filterContactsReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload
});


export { allReducers, filterContactsReducer };
