export const API = Symbol('API');

export const Api = store => next => action => {
  if (action[API]) {
    const { endpoint, method, header = '', body = '', token = '' } = action[API];
    fetch(`${endpoint}`, {
      method: method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
        header
      },
      body: body,
    })
      .then(response => response.json())
      .then((payload) => {
        if (payload.status != 'error') {
          store.dispatch({
            type: `${action.type}_SUCCESS`,
            payload,
          });
        } else {
          store.dispatch({
            type: `${action.type}_FAIL`,
            payload
          });
          alert(payload);
        }
      })
      .catch((error) => {
        store.dispatch({
          type: `${action.type}_FAIL`,
          error,
        });
        alert(error);
      });
    next({
      ...action,
      type: `${action.type}_REQUEST`,
    });
  } else {
    next(action);
  }
};