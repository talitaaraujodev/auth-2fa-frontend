import { ChangeEvent, useState, useRef, useContext } from 'react';
import { userService } from '../services/user';
import { utils } from '../utils';
import { ModalConfirmSignup } from './ModalConfirmSignup';
import { AppContext, AppContextType } from '../contexts';

type SignupForm = {
  name: string;
  email: string;
  password: string;
};
export function FormSignup() {
  const [qrCode, setQrCode] = useState<string>('');
  const [secret, setSecret] = useState<string>('');
  const [showModalConfirmSignup, setShowModalConfirmSignup] =
    useState<boolean>(false);
  const [data, setData] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState(0);

  const { isSingIn, setIsSignIn } = useContext(AppContext) as AppContextType;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateQrCode = async () => {
    await userService
      .generateSecret()
      .then((res) => {
        setSecret(res.secret);
        setQrCode(res.qrCode);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendSignup = async () => {
    setIsLoading(true);
    const code = otp.join('');
    await userService
      .createUser(data.name, data.email, data.password, secret, code)
      .then((res) => {
        const errors = res.errors;
        if (errors) {
          setIsLoading(false);
          errors.forEach((field: any, index: any) => {
            const keys = Object.keys(field);
            utils.errorMessage(`${field[keys[index]]}`);
          });
          return;
        }
        setIsLoading(false);
        setShowModalConfirmSignup(false);
        setIsSignIn(true);
        utils.successMessage('Usuário criado com sucesso.');
        return;
      })
      .catch((error) => {
        setIsLoading(false);
        console.log('error', error);
      });
  };

  async function openModalConfirmSignup() {
    if (data.name === '' || data.email === '' || data.password === '') {
      utils.errorMessage('Nome, e-mail e senha são campos obrigatórios.');
    } else {
      await generateQrCode();
      setShowModalConfirmSignup(!showModalConfirmSignup);
    }
  }
  function closeModalConfirmSignup() {
    setShowModalConfirmSignup(false);
  }
  const inputsRef = otp.map(() => useRef<HTMLInputElement | null>(null));
  const handleOtpChange = (value: any, index: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < newOtp.length - 1) {
      setActiveInput(index + 1);
      inputsRef[index + 1].current.focus();
    } else if (!value && index > 0) {
      setActiveInput(index - 1);
      inputsRef[index - 1].current.focus();
    }
  };

  return (
    <div className="p-3 lg:w-2/4 bg-white lg:rounded-r-lg form-right">
      <div className="flex items-center flex-col px-1 py-2">
        <h2 className="text-[#1A1B40] text-2xl font-bold text-center">
          Register Account
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
        <div className="flex flex-col w-100 h-100">
          <label
            htmlFor="name"
            className="font-semibold text-dark py-1 text-base"
          >
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome..."
            className="p-2.5 rounded bg-[#f5f5f5] text-[#c2c2c2] outline-0"
            onChange={handleInputChange}
            value={data.name}
          />
        </div>
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
            onChange={handleInputChange}
            value={data.email}
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
            onChange={handleInputChange}
            value={data.password}
          />
        </div>
        <div className="flex flex-col pt-4 text-sm space-y-4 ">
          <button
            className=" w-full bg-emerald-500 rounded text-white p-3 font-semibold hover:opacity-80 shadow-sm text-base"
            type="button"
            onClick={() => openModalConfirmSignup()}
          >
            Enviar
          </button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <span className="text-[#afb0ab] text-sm">
            Copyright © 2023 - Todos os direitos reservados
          </span>
        </div>
      </form>
      <ModalConfirmSignup
        openModalConfirmSignup={showModalConfirmSignup}
        closeModalConfirmSignup={closeModalConfirmSignup}
        handleOtpChange={handleOtpChange}
        sendSignup={sendSignup}
        activeInput={activeInput}
        inputsRef={inputsRef}
        otp={otp}
        loading={isLoading}
        qrCode={qrCode}
      />
    </div>
  );
}
