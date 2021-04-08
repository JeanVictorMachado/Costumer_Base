import React, { useState, useEffect } from 'react';

import * as S from './styles';

const Login: React.FC = () => {
  const [pathName, setPathName] = useState<string>();

  useEffect(() => {
    switch (window.location.pathname) {
      case '/admin':
        return setPathName('Cadastro');
      default:
        return;
    }
  }, []);

  return (
    <S.Wrapper>
      <h1>{pathName}</h1>
    </S.Wrapper>
  );
};

export default Login;
