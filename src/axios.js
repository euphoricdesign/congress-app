import axios from 'axios';

const instanceCongress = axios.create({
  baseURL: "https://api.propublica.org",
  headers: { "X-API-Key": "vOoUgjZl8mpec0UdaTHQmC3QrMAlAZ4VLQ6JbbL1" }
});

export default instanceCongress;