import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  //? (baseURL = 'here should be your production endpoint')
  ? (baseURL = 'https://travel-journal-db.herokuapp.com/')
  : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });
 
const errorHandler = err => {
  // console.error(err);
  throw err;
};
 
export default {
  service,
 
  handleUpload (theFile) {
    // console.log('file in service: ', theFile)
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },
 
  saveNewThing (newThing) {
    // console.log('new thing is: ', newThing)
    return service.post('/things/create', newThing)
      .then(res => res.data)
      .catch(errorHandler);
  }
}