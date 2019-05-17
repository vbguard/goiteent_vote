import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://vote.vbguard.dev/api"
});

// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const getCommands = () => instance.get("/commands").then(res => res.data);

export default {
  getCommands
};
