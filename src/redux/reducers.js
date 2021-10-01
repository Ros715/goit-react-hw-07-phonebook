import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
//import { addContact, deleteContact /*, changeFilter*/ } from "./actions";
import * as contactsActions from "./actions";

const contacts = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

const rootReducer = combineReducers({
  contacts,
  filter,
});

export default rootReducer;
