import axios from "axios";

export default axios.create({
	baseURL: "https://59b00210e54d3d001198e701.mockapi.io/api/shopCart",
	responseType: "json"
});
