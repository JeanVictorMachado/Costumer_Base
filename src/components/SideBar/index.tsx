import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

const SideBar: React.FC = () => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <div onClick={() => history.push('/customers')}>
        <span>Clientes</span>
      </div>
      <div onClick={() => history.push('/register')}>
        <span>Cadastrar</span>
      </div>
    </S.Wrapper>
  );
};

export default SideBar;
