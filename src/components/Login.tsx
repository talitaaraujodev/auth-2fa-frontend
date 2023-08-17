import { Link } from 'react-router-dom';
import { FormProps } from '../types/CommonTypes';

export function Login({ isSingIn, setIsSignIn }: FormProps) {
  console.log(isSingIn);
  return (
    <div className="p-3 lg:w-2/4 bg-white lg:rounded-r-lg form-right  ">
      <div className="flex items-center flex-col px-1 py-2">
        <h2 className="text-[#1A1B40] text-2xl font-bold text-center">
          Login Account
        </h2>
        <span className="text-center pt-1 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div className="form-btns flex items-center space-x-4 pt-2">
          <button
            className={`${
              isSingIn
                ? 'border-solid border-2 bg-white border-[#696eff] text-[#696eff] font-semibold p-1.5 text-base rounded text-center w-40'
                : 'bg-[#696eff] text-white font-semibold p-1.5 rounded text-center w-40 text-base'
            } `}
            onClick={() => setIsSignIn(true)}
          >
            Login
          </button>
          <button
            className={`${
              !isSingIn
                ? 'border-solid border-2 bg-white border-[#696eff] text-[#696eff] font-semibold p-1.5 text-base rounded text-center w-40'
                : 'bg-[#696eff] text-white font-semibold p-1.5 rounded text-center w-40 text-base'
            } `}
            onClick={() => setIsSignIn(!true)}
          >
            Registre-se
          </button>
        </div>
      </div>
      <form method="POST" className="p-2">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="font-semibold text-dark py-1 text-base"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail..."
            className="w-100 p-2.5 rounded bg-[#f5f5f5] text-[#c2c2c2] outline-0"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="font-semibold text-dark py-1 text-base"
          >
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha..."
            className="p-2.5 rounded bg-[#f5f5f5] text-[#c2c2c2] outline-0"
          />
        </div>
        <div className="flex flex-col pt-2 text-sm space-y-4 ">
          <Link
            to={'#'}
            className="text-right text-[#696eff] font-medium text-sm hover:underline"
          >
            Esqueceu a senha?
          </Link>
          <button className=" w-full bg-emerald-500 rounded text-white p-3 font-semibold hover:opacity-80 shadow-sm text-base">
            Enviar
          </button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <span className="text-[#afb0ab] text-sm">
            © 2023 Todos os direitos reservados
          </span>
        </div>
      </form>
    </div>
  );
}
