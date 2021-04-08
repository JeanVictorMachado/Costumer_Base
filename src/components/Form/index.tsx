import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { validateForm } from '../../utils/validateForm';

import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { CgCalendarDates } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { TiDocumentText } from 'react-icons/ti';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';

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

  const { stateEmail } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdClient = validateForm({
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

    return createdClient;
  };

  return (
    <S.Form onSubmit={e => handleSubmit(e)}>
      <div>
        <Input
          id="name"
          type="text"
          name="name"
          value={name}
          placeholder="Nome"
          Icon={FiUser}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setName(value)}
        />
        <Input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Sobrenome"
          Icon={FiUser}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setLastName(value)}
        />
      </div>
      <div>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          Icon={FiMail}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <p>{stateEmail}</p>
        <Input
          id="phone"
          type="phone"
          name="phone"
          value={phone}
          placeholder="Telefone"
          Icon={BiPhoneCall}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setPhone(value)}
        />
      </div>
      <div>
        <Input
          id="cpf"
          type="text"
          name="cpf"
          value={cpf}
          placeholder="CPF"
          Icon={TiDocumentText}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setCpf(value)}
        />
        <Input
          id="date"
          type="date"
          name="date"
          value={birth}
          placeholder="Data de nascimento"
          Icon={CgCalendarDates}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setBirth(value)}
        />
      </div>
      <div>
        <Input
          id="address"
          type="textarea"
          name="address"
          value={address}
          placeholder="Endereço"
          Icon={FaRegAddressBook}
          width="690px"
          required={true}
          onChange={({ target: { value } }) => setAddress(value)}
        />
        <Input
          id="number"
          type="number"
          name="number"
          value={number}
          placeholder="Numero"
          Icon={AiOutlineFieldNumber}
          width="150px"
          required={true}
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </div>
      <div>
        <Input
          id="address"
          type="textarea"
          name=""
          value=""
          placeholder="Endereço 2"
          Icon={FaRegAddressBook}
          width="690px"
        />
        <Input
          id="number"
          type="number"
          name=""
          value=""
          placeholder="Numero"
          Icon={AiOutlineFieldNumber}
          width="150px"
        />
      </div>
      <div>
        <Input
          id="district"
          type="text"
          name="district"
          value={district}
          placeholder="Bairro"
          Icon={FaRegAddressBook}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setDistrict(value)}
        />
        <Input
          id="city"
          type="text"
          name="city"
          value={city}
          placeholder="Cidade - UF"
          Icon={FaRegAddressBook}
          width="420px"
          required={true}
          onChange={({ target: { value } }) => setCity(value)}
        />
      </div>
      <Button type="submit">Cadastrar</Button>
    </S.Form>
  );
};

export default Form;
