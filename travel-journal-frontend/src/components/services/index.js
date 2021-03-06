import axios from 'axios';
let baseURL = 'https://travel-journal-db.herokuapp.com';

// process.env.NODE_ENV === 'production'
//   //? (baseURL = 'here should be your production endpoint')
//   ? (baseURL = 'https://travel-journal-db.herokuapp.com')
//   : (baseURL = 'https://travel-journal-db.herokuapp.com');

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get('/is-logged-in')
  },
  signUp: async (user) => {
    return await service.post('/signup', user)
  },
  logIn: async (user) => {
    return await service.post('/login', user)
  },
  logOut: async () => {
    return await service.get('/logout')
  },
  postToDb: async (data) => {
    return await service.post('/journalEntry', data)
  },
  updateDb: async (data) => {
    return await service.post(`/journalEntry/update`,data)
  },
 
};

export default actions;