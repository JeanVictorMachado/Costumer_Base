import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

type CardClientsProps = {
  index: number;
  handleDeleteCustomer?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  client: {
    name: string;
    cpf: number;
  };
};

const CardClients: React.FC<CardClientsProps> = ({
  client,
  index,
  handleDeleteCustomer,
}) => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <S.Informations onClick={() => history.push(`/customers/${client.cpf}`)}>
        <div>{index + 1}</div>
        <span>{client.name}</span>
        <span>{client.cpf}</span>
      </S.Informations>

      <S.ClearButton
        type="button"
        id={client.cpf.toString()}
        onClick={handleDeleteCustomer}
      >
        X
      </S.ClearButton>
    </S.Wrapper>
  );
};

export default CardClients;
