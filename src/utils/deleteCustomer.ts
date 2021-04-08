export const deleteCurtomer = (cpf: string) => {
  const clients = JSON.parse(<string>localStorage.getItem('@clients'));

  if (clients) {
    const filterClients = clients.filter(
      (client: { cpf: string }) => client.cpf !== cpf,
    );

    return filterClients;
  }
};
