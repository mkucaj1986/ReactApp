const getData = (
    state = {
        data: [],
        items: [],
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
        default:
            return { ...state };
    }
    return state;
};

export default getData;
