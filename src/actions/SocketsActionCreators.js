import ACTION_TYPE from './types';

export const someAction = dataFromSocket => ({
	type: ACTION_TYPE.SOME_SOCKETS_ACTION,
	payload: {
		data: dataFromSocket,
	},
});

/*

    and many others action creators

*/
