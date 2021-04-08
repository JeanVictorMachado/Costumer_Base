import React, { useState, useEffect } from 'react';
import { FiMail } from 'react-icons/fi';

import { searchCurtomers } from '../../utils/searchCustomers';

import Input from '../Input';

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
  const [readOnly, setReadOnly] = useState<boolean>(false);

  const [, _path, cpf] = window.location.pathname.split('/');

  useEffect(() => {
    const clients = searchCurtomers();

    const client = clients.filter((client: { cpf: string }) =>
      client.cpf.includes(cpf),
    );

    setClientDetails(client[0]);
  }, []);

  return (
    <S.Wrapper>
      <div>
        <div>
          <h2>{`${clientDetails?.name} ${clientDetails?.lastName}`}</h2>
        </div>
        <span>{`CPF: ${clientDetails?.cpf}`}</span>
      </div>
      <div>
        <Input
          type="text"
          name="email"
          value={clientDetails?.email}
          placeholder=""
          Icon={FiMail}
          width="420px"
          readOnly={readOnly}
        />
        <Input
          type="text"
          name="phone"
          value={clientDetails?.phone}
          placeholder=""
          Icon={FiMail}
          width="420px"
          readOnly={readOnly}
        />
      </div>
      <div>
        <Input
          type="textarea"
          name="address"
          value={clientDetails?.address}
          placeholder=""
          Icon={FiMail}
          width="690px"
          readOnly={readOnly}
        />
        <Input
          id="number"
          type="text"
          name="number"
          value={clientDetails?.number}
          placeholder=""
          Icon={FiMail}
          width="150px"
          readOnly={readOnly}
        />
      </div>
      <div>
        <Input
          type="text"
          name="district"
          value={clientDetails?.district}
          placeholder=""
          Icon={FiMail}
          width="420px"
          readOnly={readOnly}
        />
        <Input
          type="text"
          name="name"
          value={clientDetails?.city}
          placeholder=""
          Icon={FiMail}
          width="420px"
          readOnly={readOnly}
        />
      </div>
    </S.Wrapper>
  );
};

export default CardDetails;
