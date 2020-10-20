import produce from 'immer';
import ACTION_TYPE from '../actions/types';

const initialState = {
	data: null,
};

function webSocketReducer(state = initialState, action) {
	const { type } = action;

	switch (type) {
		case ACTION_TYPE.SOME_SOCKETS_ACTION: {
			const {
				payload: { data },
			} = action;

			const nextState = produce(state, draftState => {
				draftState.data = data;
			});

			return nextState;
		}
		default:
			return state;
	}
}

export default webSocketReducer;
