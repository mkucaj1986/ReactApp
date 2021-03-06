const getData = (
    state = {
        data: [],
        items: [],
        totalPrice: null,
        dataLoaded: false
    },
    action
) => {
    switch (action.type) {
        case "SUCCESS":
            state = {
                ...state,
                data: action.payload.data,
                items: action.payload.data.items,
                totalPrice: action.payload.data.cart.subtotal,
                dataLoaded: true
            };
            break;
        case "DELETE_ITEM":
            state = {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload),
                    ...state.items.slice(action.payload + 1)
                ]
            };
            break;
        case "INCREASE":
            state = {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload),
                    {
                        ...state.items[action.payload],
                        qty: state.items[action.payload].qty + 1
                    },
                    ...state.items.slice(action.payload + 1)
                ]
            };
            break;
        case "DECREMENT":
            state = {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload),
                    {
                        ...state.items[action.payload],
                        qty: state.items[action.payload].qty - 1
                    },
                    ...state.items.slice(action.payload + 1)
                ]
            };
            break;
        case "GET_TOTAL_PRICE":
            state = {
                ...state,
                totalPrice: action.payload
            };
            break;
        case "SELECT_SKU":
            state = {
                ...state,
                items: [
                    ...state.items.slice(0, action.payload.index),
                    {
                        ...state.items[action.payload.index],
                        activesku: (state.items[
                            action.payload.index
                        ].activesku =
                            action.payload.selectedSku)
                    },
                    ...state.items.slice(action.payload.index + 1)
                ]
            };
            break;
        default:
            return { ...state };
    }
    return state;
};

export default getData;
