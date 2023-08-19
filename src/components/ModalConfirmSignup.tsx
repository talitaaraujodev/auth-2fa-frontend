import { ModalConfirmSignupProps } from '../types/CommonTypes';
import { Modal } from './Modal';
import ImgStoreApp from '../assets/store-app.png';

export function ModalConfirmSignup({
  openModalConfirmSignup,
  closeModalConfirmSignup,
  otp,
  inputsRef,
  activeInput,
  handleOtpChange,
  sendSignup,
  loading,
  qrCode,
}: ModalConfirmSignupProps) {
  return (
    <Modal
      closeModal={closeModalConfirmSignup}
      openModal={openModalConfirmSignup}
    >
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-2xl py-1.5 text-[#696eff] pb-5">
          Configuração 2FA
        </h2>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <span className="text-base text-left text-[#585454]">
              Baixe o aplicativo do Google Authenticator em sua loja de
              aplicativo e escanei o código ao lado e informe o PIN gerado.
            </span>
            <img
              alt="Imagem loja de aplicativo"
              width={200}
              height={200}
              src={ImgStoreApp}
            />
          </div>
          <img alt="Imagem qrCode" src={qrCode} />
        </div>

        <label
          htmlFor="code"
          className="font-semibold text-[#696eff] py-1 text-base "
        >
          Digite o PIN gerado
        </label>
        <div className="flex flex-row">
          {otp.map((digit: any, index: any) => (
            <input
              required
              key={index}
              type="text"
              name="code"
              id="code"
              maxLength={1}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              ref={inputsRef[index]}
              value={digit}
              className={`h-[42px] w-[42px] text-lg text-center border-solid border border-[#dcdde1] rounded mr-2 mt-3 outline-none  ${
                activeInput === index ? 'active' : ''
              }`}
            />
          ))}
        </div>
        <button
          className="w-36 bg-emerald-500 rounded text-white p-2 mt-4 font-semibold text-center hover:opacity-80  text-base"
          onClick={(e) => {
            e.stopPropagation();
            sendSignup();
          }}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </div>
    </Modal>
  );
}
