import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTdhMWY2ZTFlZDdhYmZjMjljYmE0MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NjEyNDgwMiwiZXhwIjoxNjc2OTg4ODAyfQ.8LdcY4sKTOqUtgld0paLESoYjH9BpihBfgq1idwMUko"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}` },
});