type validateFormProps = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string;
  birth: string;
  address: string;
  number: string;
  district: string;
  city: string;
};

export const validateForm = ({
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
}: validateFormProps): void => {
  localStorage.setItem(
    '@clients',
    JSON.stringify([
      {
        client: {
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
        },
      },
    ]),
  );

  return alert('Cliente cadastrado com sucesso!');
};
