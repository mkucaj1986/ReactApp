export function selectSku(selectedSku, index) {
	const sku = {
		selectedSku,
		index
	};
	return {
		type: "SELECT_SKU",
		payload: sku
	};
}
