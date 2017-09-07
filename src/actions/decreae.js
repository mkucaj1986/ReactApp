export function decrement(item) {
	return {
		type: "DECREMENT",
		payload: item
	};
}
