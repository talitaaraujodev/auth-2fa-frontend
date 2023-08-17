import { Dispatch, SetStateAction } from 'react';

export type FormProps = {
  isSingIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
};
