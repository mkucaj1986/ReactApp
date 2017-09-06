const getData = (
    state = {
        data: [],
        dataLoaded: false
    },
    action
) => {
    switch (action.type) {
        case "SUCCESS":
            state = {
                ...state,
                data: action.payload.data,
                dataLoaded: true
            };
            break;
        default:
            return { ...state };
    }
    return state;
};

export default getData;
