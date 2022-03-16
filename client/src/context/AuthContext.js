import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    city: 'Busan',
    coverPicture: '',
    createdAt: '2022-03-11T14:18:30.704Z',
    desc: 'This is my updated dscriptions',
    email: 'lsevina126@gmail.com',
    followers: [],
    followings: [],
    from: 'South Korea',
    isAdmin: false,
    profilePicture: '',
    relationship: 1,
    updatedAt: '2022-03-12T01:59:16.630Z',
    username: 'Lee Seong Eun',
    __v: 0,
    _id: '622b5a3657716d222d3b96ab',
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
