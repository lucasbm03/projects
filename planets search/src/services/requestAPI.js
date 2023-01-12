const requestAPI = async () => {
  try {
    const request = await fetch('https://swapi.dev/api/planets');
    const response = await request.json();
    const { results } = response;
    delete results.residents;
    return results;
  } catch (e) {
    console.log(e);
  }
};

export default requestAPI;
