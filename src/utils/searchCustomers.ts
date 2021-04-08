export const searchCurtomers = (): any => {
  const clients = JSON.parse(<string>localStorage.getItem('@clients'));

  return clients;
};
