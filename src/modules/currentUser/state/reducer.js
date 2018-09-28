import localStore from 'store2';

import * as T from './types';

const initialState = {
  isLoading: false,
  data: Object.assign(
    {
      id: '',
      groupId: '',
      token: '',
      email: '',
      firstName: '',
      lastName: '',
      avatar: '',
      created: 0,
    },
    localStore.get('currentUser')
  ),
};

export default (state = initialState, action) => {
  switch(action.type) {
    case T.REGISTER:
      return state;
    default:
      return state;
  }
}
