import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { validateForm } from '../../utils/validateForm';

import { FiMail } from 'react-icons/fi';

import * as S from './styles';
import { date } from 'yup';

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

  const { stateEmail } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errorMessage = validateForm({
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

    setName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setCpf('');
    setBirth('');
    setAddress('');
    setNumber('');
    setDistrict('');
    setCity('');

    return errorMessage;
  };

  return (
    <S.Form onSubmit={e => handleSubmit(e)}>
      <div>
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Nome"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setName(value)}
        />
        <Input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Sobrenome"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setLastName(value)}
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <p>{stateEmail}</p>
        <Input
          type="phone"
          name="phone"
          value={phone}
          placeholder="Telefone"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setPhone(value)}
        />
      </div>
      <div>
        <Input
          type="text"
          name="cpf"
          value={cpf}
          placeholder="CPF"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setCpf(value)}
        />
        <Input
          id="date"
          type="date"
          name="date"
          value={birth}
          placeholder="Data de nascimento"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setBirth(value)}
        />
      </div>
      <div>
        <Input
          type="textarea"
          name="address"
          value={address}
          placeholder="Endereço"
          Icon={FiMail}
          width="690px"
          onChange={({ target: { value } }) => setAddress(value)}
        />
        <Input
          id="number"
          type="number"
          name="number"
          value={number}
          placeholder="Numero"
          Icon={FiMail}
          width="150px"
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </div>
      <div>
        <Input
          type="text"
          name="district"
          value={district}
          placeholder="Bairro"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setDistrict(value)}
        />
        <Input
          type="text"
          name="city"
          value={city}
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
