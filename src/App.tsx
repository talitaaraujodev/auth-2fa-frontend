import { useState } from 'react';
import imgLogin from './assets/flat-login.png';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  const [isSingIn, setIsSignIn] = useState<boolean>(true);
  return (
    <div className="app flex w-[100vw] h-[100vh] items-center justify-center overflow-x-hidden">
      <div className="content flex flex-col lg:flex-row bg-inherit lg:w-8/12 xl:w-6/12 justify-center">
        <div className="form-left flex items-center justify-center lg:w-2/4 bg-[#b5b8ff] lg:rounded-l-lg">
          <img
            src={imgLogin}
            alt="Imagem Login"
            className="w-full max-w-xs lg:max-w-none "
          />
        </div>
        {isSingIn ? (
          <Login isSingIn={isSingIn} setIsSignIn={setIsSignIn} />
        ) : (
          <Register isSingIn={isSingIn} setIsSignIn={setIsSignIn} />
        )}
      </div>
    </div>
  );
}

export default App;
