export type ModalProps = {
  openModal: boolean;
  closeModal: () => void;
  style: string;
  children: React.ReactNode;
};

export type ModalConfirmLoginProps = {
  openModalConfirmLogin: boolean;
  closeModalConfirmLogin: () => void;
  otp: string[];
  inputsRef: any;
  activeInput: number;
  handleOtpChange: (value: string, index: number) => void;
  sendLogin: () => void;
  loading: boolean;
};

export type ModalConfirmSignupProps = {
  openModalConfirmSignup: boolean;
  closeModalConfirmSignup: () => void;
  otp: string[];
  inputsRef: any;
  activeInput: number;
  handleOtpChange: (value: string, index: number) => void;
  sendSignup: () => void;
  loading: boolean;
  qrCode: any;
};
export type InputOtpProps = {
  otp: Array<string>;
  inputsRef: any;
  handleOtpChange: (value: string, index: number) => void;
  activeInput: number;
};
