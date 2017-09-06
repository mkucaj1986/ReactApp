export function removeItem(item) {
	return {
		type: "DELETE_ITEM",
		payload: item
	};
}
