import * as T from './types';
import { setCurrentUser } from '../../currentUser/state/actions';

export const registerUser = (user) => async (dispatch) => {
  console.log('registerUser', user);
  dispatch({ type: T.REGISTER_PENDING });
  try {
    const groupId = '6vf77z4hd5';
    const newUser = await fetch(`https://lab.lectrum.io/redux/api/user/${groupId}`, {
      method: 'POST',
      body: {
        ...user,
        invite: "rtASDLastuev77"
      }
    });
    dispatch({ type: T.REGISTER_SUCCESS });
    dispatch(setCurrentUser(newUser));
  } catch(error) {
    dispatch({ type: T.REGISTER_FAILURE });
  }
}
