import { CgClose } from 'react-icons/cg';
import { ModalProps } from '../types/CommonTypes';

export function Modal({ children, openModal, closeModal }: ModalProps) {
  return (
    <div className={`${openModal ? 'modal' : 'invisible hidden'}`}>
      <div
        className={`${
          openModal ? 'modal-content rounded shadow-md' : 'invisible hidden'
        }`}
      >
        <div className="flex items-center justify-end">
          <CgClose
            size={24}
            className="cursor-pointer"
            color="#47484a"
            onClick={() => closeModal()}
          />
        </div>
        {children}
      </div>
    </div>
  );
}
