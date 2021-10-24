const initialState = { cityName: "Tel Aviv", cityKey: 215854, searchResults: [], weatherResults: {} };

const reducer =
    (state = initialState, action) => {
        switch (action.type) {
            case 'SET NAME':
                return { ...state, cityName: action.payload };
            case 'SET KEY':
                return { ...state, cityKey: action.payload };
            case 'SET SEARCH':
                return { ...state, searchResults: action.payload };
            case 'SET WEATHER':
                return { ...state, weatherResults: action.payload };
            default:
                return state;
        }
    }
export default reducer;