import { ModalConfirmSignupProps } from '../../types/CommonTypes';
import { Modal } from '../Modal';
import { InputOtp } from '../InputOtp';
import ImgStoreApp from '../../assets/store-app.png';

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
      style={'my-[9%] mx-auto'}
    >
      <div className="flex flex-col justify-center">
        <h2 className="font-semibold text-2xl py-1.5 text-[#696eff] pb-5">
          Configuração 2FA
        </h2>
        <div className="flex lg:flex-row flex-col">
          <div className="flex flex-col">
            <span className="text-base text-left text-[#585454]">
              Baixe o aplicativo do Google Authenticator em sua loja de
              aplicativo e escanei o código ao lado e informe o PIN gerado.
            </span>
            <img
              alt="Imagem loja de aplicativo"
              className="w-[140px] lg:w-[200px]"
              src={ImgStoreApp}
            />
          </div>
          <img
            alt="Imagem qrCode"
            src={qrCode}
            className="w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]"
          />
        </div>

        <label
          htmlFor="code"
          className="font-semibold text-[#696eff] py-1 text-base "
        >
          Digite o PIN gerado
        </label>
        <div className="flex flex-row">
          <InputOtp
            otp={otp}
            handleOtpChange={handleOtpChange}
            activeInput={activeInput}
            inputsRef={inputsRef}
          />
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
