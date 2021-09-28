import { createAction } from "@reduxjs/toolkit";
//import { types } from "./actions-types";

export const fetchContactsRequest = createAction("fetchContacts/request");
export const fetchContactsSuccess = createAction("fetchContacts/success");
export const fetchContactsError = createAction("fetchContacts/error");

export const addContactRequest = createAction("addContact/request");
export const addContactSuccess = createAction("addContact/success");
export const addContactError = createAction("addContact/error");

export const deleteContactRequest = createAction("deleteContact/request");
export const deleteContactSuccess = createAction("deleteContact/success");
export const deleteContactError = createAction("deleteContact/error");
