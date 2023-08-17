import React, { useContext } from 'react';
import { FormLogin } from '../../components/FormLogin';
import { AppContext, AppContextType } from '../../contexts';

export function Login() {
  const { isSingIn, setIsSignIn } = useContext(AppContext) as AppContextType;

  return (
    <React.Fragment>
      <FormLogin isSingIn={isSingIn} setIsSignIn={setIsSignIn} />
    </React.Fragment>
  );
}
