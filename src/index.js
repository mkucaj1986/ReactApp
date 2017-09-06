import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import App from "./containers/App";
import "./style/index.scss";

render(
	<Provider store={store}>
		<App />
	</Provider>,
	window.document.getElementById("app")
);
