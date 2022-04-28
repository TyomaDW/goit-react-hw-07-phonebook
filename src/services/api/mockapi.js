import axios from 'axios';

const BASE_URL =
  'https://626af787e5274e6664c5fa11.mockapi.io/contacts/contacts/';

const getContacts = () =>
  axios({
    method: 'get',
    url: BASE_URL,
  });

const addContact = ({ name, phone }) => {
  return axios({
    method: 'post',
    url: BASE_URL,
    data: {
      name,
      phone,
    },
  });
};

const deleteContact = id =>
  axios({
    method: 'delete',
    url: `${BASE_URL}${id}`,
  });

export const mockapi = {
  getContacts,
  addContact,
  deleteContact,
};
