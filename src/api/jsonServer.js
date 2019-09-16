import axios from "axios";

export default axios.create({
  // URL must be udated every 8 hours from ngrok
  baseURL: "http://c3e35293.ngrok.io"
});
