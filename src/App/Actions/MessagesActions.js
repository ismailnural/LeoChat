import { ActionTypes } from './Types';
import { API } from '@App/Api';

export const MessagesActions = {
	getMessages: (endpoint) => ({
		type: ActionTypes.MESSAGES.GET_MESSAGES,
		[API]: {
			endpoint: endpoint,
			method: 'GET',
			header: '',
			body: '',
			token: '',
		}
	}),

	addNewMessage: (payload) => ({
		type: ActionTypes.MESSAGES.ADD_NEW_MESSAGE,
		payload
	})
}
