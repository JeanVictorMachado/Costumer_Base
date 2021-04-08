import React from 'react';

import * as S from './styles';

type CardClientsProps = {
  client: {
    index: number;
    name: string;
    cpf: number;
  };
};

const CardClients: React.FC<CardClientsProps> = ({ client }) => {
  return (
    <S.Wrapper>
      <S.Informations>
        <div>1</div>
        <span>Jean Machado</span>
        <span>075.890.439-82</span>
      </S.Informations>

      <S.ClearButton>X</S.ClearButton>
    </S.Wrapper>
  );
};

export default CardClients;
