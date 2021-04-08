import React, { useState, useEffect } from 'react';
import CardClients from '../../components/CardClients';

import { searchCurtomers } from '../../utils/searchCustomers';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import * as S from './styles';

const Customers: React.FC = () => {
  const [clients, setClients] = useState<null | []>();

  useEffect(() => {
    const clients = searchCurtomers();

    setClients(clients);
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <S.MainContent>
        <SideBar />

        <S.Content>
          {clients &&
            clients.map((client, index) => (
              <div key={index}>
                <CardClients client={client} />
              </div>
            ))}
        </S.Content>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default Customers;
