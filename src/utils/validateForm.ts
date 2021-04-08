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
}: validateFormProps): any => {
  const clients = JSON.parse(<string>localStorage.getItem('@clients'));

  if (!clients) {
    localStorage.setItem(
      '@clients',
      JSON.stringify([
        {
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
      ]),
    );
  } else {
    localStorage.setItem(
      '@clients',
      JSON.stringify([
        ...clients,
        {
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
      ]),
    );
  }

  return alert('Cliente cadastrado com sucesso!');
};
