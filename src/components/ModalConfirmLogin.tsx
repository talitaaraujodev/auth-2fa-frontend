import { ModalConfirmLoginProps } from '../types/CommonTypes';
import { Modal } from './Modal';
import { BiSolidLock } from 'react-icons/bi';

export function ModalConfirmLogin({
  openModalConfirmLogin,
  closeModalConfirmLogin,
  otp,
  inputsRef,
  activeInput,
  handleOtpChange,
  sendLogin,
  loading,
}: ModalConfirmLoginProps) {
  return (
    <Modal
      closeModal={closeModalConfirmLogin}
      openModal={openModalConfirmLogin}
    >
      <div className="flex flex-col items-center justify-center">
        <BiSolidLock
          size={45}
          color="#fff"
          className="bg-[#eb245a] rounded-full  p-[0.4rem]"
        />
        <h2 className="font-semibold text-2xl py-1.5">
          Verificação de Segurança 2FA
        </h2>
        <span className="text-base text-center text-[#585454]">
          Digite o PIN gerado pelo Google Authenticator para prosseguir com a
          autenticação.
        </span>
        <div className="flex flex-row">
          {otp.map((digit: any, index: any) => (
            <input
              required
              key={index}
              type="text"
              name="code"
              maxLength={1}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              ref={inputsRef[index]}
              value={digit}
              className={`h-[42px] w-[42px] text-lg text-center border-solid border border-[#dcdde1] rounded ml-2 mt-3 outline-none  ${
                activeInput === index ? 'active' : ''
              }`}
            />
          ))}
        </div>
        <button
          className="w-36 bg-emerald-500 rounded text-white p-2 mt-4 font-semibold text-center hover:opacity-80  text-base"
          onClick={(e) => {
            e.stopPropagation();
            sendLogin();
          }}
        >
          {loading ? 'Verificando...' : 'Verificar'}
        </button>
      </div>
    </Modal>
  );
}
