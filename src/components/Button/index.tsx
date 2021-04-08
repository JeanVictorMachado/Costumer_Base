import React from 'react';

import * as S from './styles';

const Button: React.FC = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Button;
