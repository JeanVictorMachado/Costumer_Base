import React, { useState, useEffect } from 'react';
import CardClients from '../../components/CardClients';

import { searchCurtomers } from '../../utils/searchCustomers';
import { deleteCurtomer } from '../../utils/deleteCustomer';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import * as S from './styles';

const Customers: React.FC = () => {
  const [clients, setClients] = useState<null | []>();

  const handleDeleteCustomer = ({ target }: any) => {
    const clients = deleteCurtomer(target.id);

    setClients(clients);

    localStorage.setItem('@clients', JSON.stringify(clients));
  };

  const handleSearchCustumer = ({ target }: any) => {
    const { value } = target;

    const clients = searchCurtomers();

    const filterClients = clients.filter((client: { name: string }) =>
      client.name.includes(value),
    );

    setClients(filterClients);
  };

  useEffect(() => {
    const clients = searchCurtomers();

    setClients(clients);

    alert('Click no card para poder ver os detalhes do cliente!');
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <S.MainContent>
        <SideBar onChange={handleSearchCustumer} />

        <S.Content>
          {clients &&
            clients.map((client, index) => (
              <div key={index}>
                <CardClients
                  client={client}
                  index={index}
                  handleDeleteCustomer={handleDeleteCustomer}
                />
              </div>
            ))}
        </S.Content>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default Customers;
