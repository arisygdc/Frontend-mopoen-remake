import axios from "axios";
const BASE_URL = 'http://localhost:8080/api/v1'

export default axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJSZWFjdGpzIiwibmFtZSI6Im1vcG9lbiIsInZlcnNpb24iOiJyZW1ha2UifQ.nOzZaARtqU0Oo4r-NLmze8Uubqmj8MqOdOcKIAsabW4'
    }
});