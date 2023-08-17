import React, { useContext } from 'react';
import { FormSignup } from '../../components/FormSignup';
import { AppContext, AppContextType } from '../../contexts';

export function Signup() {
  const { isSingIn, setIsSignIn } = useContext(AppContext) as AppContextType;

  return (
    <React.Fragment>
      <FormSignup isSingIn={isSingIn} setIsSignIn={setIsSignIn} />
    </React.Fragment>
  );
}
