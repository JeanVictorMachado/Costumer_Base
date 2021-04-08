import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

type SideBarProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const SideBar: React.FC<SideBarProps> = ({ onChange }) => {
  const history = useHistory();

  return (
    <S.Wrapper>
      {window.location.pathname === '/customers' && (
        <div>
          <input onChange={onChange} type="text" placeholder="Pesquisar" />
        </div>
      )}
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
