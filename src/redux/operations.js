import * as contactsApi from "./contacts-api";
import * as contactsActions from "./actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(contactsActions.addContactRequest(contact));
  try {
    const contacts = await contactsApi.addContact(contact);
    console.log("add  ", contacts);
    dispatch(contactsActions.addContactSuccess(contact));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(contactsActions.deleteContactRequest(contactId));
  try {
    const contacts = await contactsApi.deleteContact(contactId);
    console.log("delete  ", contacts);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};
