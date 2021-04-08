import React, { useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { validateForm } from '../../utils/validateForm';

import { FiMail } from 'react-icons/fi';

import * as S from './styles';

const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [birth, setBirth] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    validateForm({
      name,
      lastName,
      email,
      phone,
      cpf,
      birth,
      address,
      number,
      district,
      city,
    });
  };

  return (
    <S.Form onSubmit={event => handleSubmit(event)}>
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
          onChange={({ target: { value } }) => setLastName(value)}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Input
          type="phone"
          placeholder="Telefone"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setPhone(value)}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="CPF"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setCpf(value)}
        />
        <Input
          id="date"
          type="date"
          placeholder="Data de nascimento"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setBirth(value)}
        />
      </div>
      <div>
        <Input
          type="textarea"
          placeholder="Endereço"
          Icon={FiMail}
          width="690px"
          onChange={({ target: { value } }) => setAddress(value)}
        />
        <Input
          id="number"
          type="number"
          placeholder="Numero"
          Icon={FiMail}
          width="150px"
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Bairro"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setDistrict(value)}
        />
        <Input
          type="text"
          placeholder="Cidade - UF"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setCity(value)}
        />
      </div>
      <Button type="submit">Cadastrar</Button>
    </S.Form>
  );
};

export default Form;
