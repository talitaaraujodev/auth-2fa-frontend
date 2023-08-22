import React from 'react';
import { InputOtpProps } from '../../types/CommonTypes';

export function InputOtp({
  otp,
  inputsRef,
  handleOtpChange,
  activeInput,
}: InputOtpProps) {
  return (
    <React.Fragment>
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
          className={`h-[42px] w-[42px] text-lg text-center border-solid border border-[#dcdde1] rounded mr-2 mt-3 outline-none  ${
            activeInput === index ? 'active' : ''
          }`}
        />
      ))}
    </React.Fragment>
  );
}
