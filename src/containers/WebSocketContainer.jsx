import React from 'react';
import { useSelector } from 'react-redux';

export default function WebSocketContainer() {
	// data from store state.webSocket
	const { data } = useSelector(state => state.webSocket);

	return <div></div>;
}
