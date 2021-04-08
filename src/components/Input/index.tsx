import React, { PropsWithChildren } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

import * as S from './styles';

type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  Icon?: any;
  width?: string;
  // ref?: HTMLInputElement | null;
  register?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'text',
  placeholder = 'Name',
  required = false,
  Icon,
  width = '100%',
  register,
  onChange,
}) => {
  return (
    <S.Wrapper width={width}>
      <S.WrapperImage id={id}>{Icon && <Icon size={20} />}</S.WrapperImage>
      <S.Input
        ref={register}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default Input;
