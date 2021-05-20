import { createSelector } from "@reduxjs/toolkit";

const getContactsSelector = state => state.contacts;
const contactsFilter = state => state.filter;

export const getPostsWithTags = createSelector(
  [getContactsSelector, contactsFilter],
  (contacts, filter) => contacts.filter(contact => contact.clientName.includes(filter))
);

export { getContactsSelector, contactsFilter };
