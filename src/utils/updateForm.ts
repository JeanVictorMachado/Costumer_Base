type validateFormProps = {
  email: string;
  phone: string;
  cpf: string;
  address: string;
  number: string;
  district: string;
  city: string;
};

export const updateForm = ({
  email,
  phone,
  cpf,
  address,
  number,
  district,
  city,
}: validateFormProps): any => {
  const clients = JSON.parse(<string>localStorage.getItem('@clients'));

  const clientUpdate = clients.filter((client: { cpf: string }) =>
    client.cpf.includes(cpf),
  );

  clientUpdate[0].email = email;

  const filterClients = clients.filter(
    (client: { cpf: string }) => client.cpf !== cpf,
  );

  console.log(filterClients);

  localStorage.setItem(
    '@clients',
    JSON.stringify([...clientUpdate, ...filterClients]),
  );

  return alert('Cliente Atualizado com sucesso!');
};
