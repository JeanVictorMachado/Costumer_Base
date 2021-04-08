import React, { useState } from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FiMail } from 'react-icons/fi';

import * as S from './styles';

const AdminScreen: React.FC = () => {
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [birth, setBirth] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [city, setCity] = useState<string>();

  return (
    <S.Wrapper>
      <Header />

      <S.MainContent>
        <SideBar />

        <S.Content>
          <S.Form>
            <div>
              <Input
                type="text"
                placeholder="Nome"
                Icon={FiMail}
                width="420px"
                onChange={({ target: { value } }) => setName(value)}
              />
              <Input
                type="text"
                placeholder="Sobrenome"
                Icon={FiMail}
                width="420px"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Email"
                Icon={FiMail}
                width="420px"
              />
              <Input
                type="text"
                placeholder="Telefone"
                Icon={FiMail}
                width="420px"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="CPF"
                Icon={FiMail}
                width="420px"
              />
              <Input
                id="date"
                type="text"
                placeholder="Data de nascimento"
                Icon={FiMail}
                width="420px"
              />
            </div>
            <div>
              <Input
                type="textarea"
                placeholder="Endereço"
                Icon={FiMail}
                width="690px"
              />
              <Input
                id="number"
                type="textarea"
                placeholder="Numero"
                Icon={FiMail}
                width="150px"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Bairro"
                Icon={FiMail}
                width="420px"
              />
              <Input
                type="text"
                placeholder="Cidade - UF"
                Icon={FiMail}
                width="420px"
              />
            </div>
            <Button>Cadastrar</Button>
          </S.Form>
        </S.Content>
      </S.MainContent>
    </S.Wrapper>
  );
};

export default AdminScreen;
