export function getData() {
	return {
		types: ["LOAD", "SUCCESS", "FAIL"],
		payload: {
			request: {
				url: "/"
			}
		}
	};
}
