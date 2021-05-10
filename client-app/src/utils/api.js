import axios from 'axios';

export const Api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 5000,
    // headers: {
    //     'content-type':'application/octet-stream',
    //     'x-rapidapi-host':'example.com',
    //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
    // },
});

Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const signIn = (formData) => Api.post('/signin', formData);
export const signUp = (formData) => Api.post('/signup', formData);

// export default {
//     getData: () =>
//     Api({
//         'method':'GET',
//         'url':'/query',
//         'params': {
//             'search':'parameter',
//         },
//     }),
//     postData: () =>
//     Api({
//         'method': 'POST',
//         'url':'/api',
//         'data': {
//             'item1':'data1',
//             'item2':'item2'
//         },
//         'headers': {
//             'content-type':'application/json'  // override instance defaults
//         }
//     })
// }