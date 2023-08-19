import { Dispatch, SetStateAction } from 'react';

export type FormProps = {
  isSingIn: boolean;
  setIsSignIn: Dispatch<SetStateAction<boolean>>;
};
export type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

export type ModalConfirmProps = {
  openModalConfirm: boolean;
  closeModalConfirm: () => void;
  otp: string[];
  inputsRef: any;
  activeInput: number;
  handleOtpChange: (value: string, index: number) => void;
  sendLogin: () => void;
  loading: boolean;
};
