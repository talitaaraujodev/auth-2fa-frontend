import { ModalConfirmProps } from '../types/CommonTypes';
import { Modal } from './Modal';
import { BiSolidLock } from 'react-icons/bi';

export function ModalConfirm({
  openModalConfirm,
  closeModalConfirm,
  otp,
  inputsRef,
  activeInput,
  handleOtpChange,
}: ModalConfirmProps) {
  return (
    <Modal
      closeModal={() => {
        closeModalConfirm();
      }}
      openModal={openModalConfirm}
    >
      <div className="flex flex-col items-center justify-center">
        <BiSolidLock
          size={38}
          color="#fff"
          className="bg-[#eb245a] rounded-full  p-[0.4rem]"
        />
        <h2 className="font-semibold text-2xl py-1.5">Verificação 2FA</h2>
        <span className="text-base">
          Digite o código para prosseguir com a autenticação
        </span>
        <div className="flex flex-row">
          {otp.map((digit: any, index: any) => (
            <input
              key={index}
              type="text"
              name="code"
              id="code"
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
        <button className="w-36 bg-emerald-500 rounded text-white p-2 mt-4 font-semibold text-center hover:opacity-80  text-base">
          Verificar
        </button>
      </div>
    </Modal>
  );
}
