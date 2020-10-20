import io from 'socket.io-client';
import { someAction } from '../actions/SocketsActionCreators';

const baseURL = 'ws://localhost:3000/api';

class WebSocketAPI {
	#store = null;
	#socket = null;

	constructor(store) {
		this.#socket = io(baseURL);
		this.#store = store;
		this.#socket.on('SOME_SOCKET_EVENT', this.someActionHandler);
	}

	someActionHandler(data) {
		this.#store.dispatch(someAction(data));
	}
}

export function createWebSocket(store) {
	return new WebSocketAPI(store);
}
