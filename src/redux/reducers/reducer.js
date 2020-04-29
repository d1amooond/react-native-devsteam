
const INITIAL_STATE = {
	data: []
}

const reducer = (state = INITIAL_STATE, action) => {
	if (action.type === 'GET_DATA') {
		return { ...state, data: action.payload};
	} else {
		return state;
	}
}
export default reducer;
