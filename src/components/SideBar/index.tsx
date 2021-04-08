import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

type SideBarProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const SideBar: React.FC<SideBarProps> = ({ onChange }) => {
  const { stateUpdate, setStateUpdate } = useContext(GlobalContext);

  const history = useHistory();

  return (
    <S.Wrapper>
      {window.location.pathname === '/customers' && (
        <span>
          <input onChange={onChange} type="text" placeholder="Digite um nome" />
        </span>
      )}
      <div onClick={() => history.push('/customers')}>
        <span>Clientes</span>
      </div>
      <div onClick={() => history.push('/register')}>
        <span>Cadastrar</span>
      </div>
      {window.location.pathname !== '/customers' &&
        window.location.pathname !== '/register' && (
          <div onClick={() => setStateUpdate(!stateUpdate)}>
            <span>Atualizar</span>
          </div>
        )}
    </S.Wrapper>
  );
};

export default SideBar;
