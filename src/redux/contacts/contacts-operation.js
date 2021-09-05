import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contacts-actions';

// axios.defaults.baseURL = 'https://61226d55d44628001705484b.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   }
// }

// const fetchContacts =createAsyncThunk('contacts/fetchContacts', async credentials=> {
//   // dispatch(fetchContactsRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     token.set(data.token);
//     // dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     // dispatch(fetchContactsError(error));
//   }
// });

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContacts = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };
  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactsSuccess(data));
  } catch (error) {
    dispatch(addContactsError(error.message));
  }
};

const deleteContacts = id => async dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactsSuccess(id)))
    .catch(error => dispatch(deleteContactsError(error.message)));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContacts,
  deleteContacts,
  fetchContacts,
};
