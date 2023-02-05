import axios from 'axios';

const formspreeApi = axios.create({
  baseURL: 'https://formspree.io/p/2129258151042612582/f/',
});

export default formspreeApi;
