export function getTotalPrice(productList) {
	let countTotalPrice = 0;
	productList.map(product => {
		countTotalPrice += product.price * product.qty;
	}, this);
	return {
		type: "GET_TOTAL_PRICE",
		payload: countTotalPrice
	};
}
