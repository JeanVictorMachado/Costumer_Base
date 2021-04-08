import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import CardDetails from '../../components/CardDetails';

import * as S from './styles';

const CustomerDetails: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.MainContent>
        <SideBar />

        <S.Content>
          <CardDetails />
        </S.Content>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default CustomerDetails;
