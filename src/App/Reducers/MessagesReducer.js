import { ActionTypes } from '@Actions/Types';

const initialState = {
  isLoading: true,
  isDataLoadedFromDatabase: false,
  messages: [],
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MESSAGES.GET_MESSAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isDataLoadedFromDatabase: false
      };
    case ActionTypes.MESSAGES.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        isLoading: false,
        isDataLoadedFromDatabase: true
      };
    case ActionTypes.MESSAGES.GET_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        isDataLoadedFromDatabase: false,
        error: 'There was an error loading messages!'
      };
    case ActionTypes.MESSAGES.ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}

export default MessagesReducer;