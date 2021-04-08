import React from 'react';

import * as S from './styles';

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  Icon?: any;
  width?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  placeholder = 'Name',
  required = true,
  Icon,
  width = '100%',
  onChange,
}) => {
  return (
    <S.Wrapper width={width}>
      <S.WrapperImage id={id}>{Icon && <Icon size={20} />}</S.WrapperImage>
      <S.Input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </S.Wrapper>
  );
};

export default Input;
