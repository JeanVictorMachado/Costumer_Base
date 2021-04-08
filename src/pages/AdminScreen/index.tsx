import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

import * as S from './styles';
import Form from '../../components/Form';

const AdminScreen: React.FC = () => {
  return (
    <S.Wrapper>
      <Header />

      <S.MainContent>
        <SideBar />

        <S.Content>
          <Form />
        </S.Content>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default AdminScreen;
