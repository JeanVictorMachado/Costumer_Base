import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';

import { searchCurtomers } from '../../utils/searchCustomers';
import { updateForm } from '../../utils/updateForm';

import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaRegAddressBook } from 'react-icons/fa';
import { FaBirthdayCake } from 'react-icons/fa';

import Input from '../Input';
import Buttom from '../Button';

import * as S from './styles';

type ArrayClientProps = {
  address: string;
  birth: string;
  city: string;
  cpf: string;
  district: string;
  email: string;
  lastName: string;
  name: string;
  number: string;
  phone: string;
};

const CardDetails: React.FC = () => {
  const [clientDetails, setClientDetails] = useState<ArrayClientProps>();

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const { stateUpdate } = useContext(GlobalContext);

  const [, , Cpf] = window.location.pathname.split('/');

  useEffect(() => {
    const clients = searchCurtomers();

    setCpf(Cpf);

    const client = clients.filter((client: { cpf: string }) =>
      client.cpf.includes(Cpf),
    );

    setClientDetails(client[0]);
  }, [Cpf]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedClient = updateForm({
      email,
      phone,
      cpf,
      address,
      number,
      district,
      city,
    });

    return updatedClient;
  };

  return (
    <S.Form onSubmit={e => handleSubmit(e)}>
      <div>
        <div>
          <h2>{`${clientDetails?.name} ${clientDetails?.lastName}`}</h2>
        </div>
        <span>{`CPF: ${clientDetails?.cpf}`}</span>
        <div id="container-date">
          <FaBirthdayCake />
          {clientDetails?.birth}
        </div>
      </div>
      <div>
        <Input
          id="email"
          type="text"
          name="email"
          value={stateUpdate ? undefined : clientDetails?.email}
          placeholder="Email"
          Icon={FiMail}
          width="420px"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <Input
          id="phone"
          type="text"
          name="phone"
          value={stateUpdate ? undefined : clientDetails?.phone}
          placeholder="Telefone"
          Icon={BiPhoneCall}
          width="420px"
          readOnly={!stateUpdate}
          onChange={({ target: { value } }) => setPhone(value)}
        />
      </div>
      <div>
        <Input
          id="address"
          type="textarea"
          name="address"
          value={stateUpdate ? undefined : clientDetails?.address}
          placeholder="Endereço"
          Icon={FaRegAddressBook}
          width="690px"
          readOnly={!stateUpdate}
          onChange={({ target: { value } }) => setAddress(value)}
        />
        <Input
          id="number"
          type="text"
          name="number"
          value={stateUpdate ? undefined : clientDetails?.number}
          placeholder="Numero"
          Icon={AiOutlineFieldNumber}
          width="150px"
          readOnly={!stateUpdate}
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </div>
      <div>
        <Input
          id="district"
          type="text"
          name="district"
          value={stateUpdate ? undefined : clientDetails?.district}
          placeholder="Bairro"
          Icon={FaRegAddressBook}
          width="420px"
          readOnly={!stateUpdate}
          onChange={({ target: { value } }) => setDistrict(value)}
        />
        <Input
          id="city"
          type="text"
          name="name"
          value={stateUpdate ? undefined : clientDetails?.city}
          placeholder="Cidade - UF"
          Icon={FaRegAddressBook}
          width="420px"
          readOnly={!stateUpdate}
          onChange={({ target: { value } }) => setCity(value)}
        />
      </div>
      {stateUpdate && <Buttom type="submit">Atualizar</Buttom>}
    </S.Form>
  );
};

export default CardDetails;
