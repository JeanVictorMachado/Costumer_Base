import React from 'react';

import * as S from './styles';

type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  Icon?: any;
  width?: string;
  register?: any;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = ({
  id,
  name,
  value,
  type = 'text',
  placeholder = 'Name',
  required = false,
  Icon,
  width = '100%',
  register,
  readOnly,
  onChange,
}) => {
  return (
    <S.Wrapper id={id} width={width}>
      <S.WrapperImage>{Icon && <Icon size={20} />}</S.WrapperImage>
      <S.Input
        ref={register}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default Input;
