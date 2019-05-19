import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://vote.goit.co.ua/api"
});

// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const getCommands = () => instance.get("/commands").then(res => res.data);

const vote = (id, data) => instance.post(`/vote/${id}`, data);
export default {
  getCommands,
  vote
};
