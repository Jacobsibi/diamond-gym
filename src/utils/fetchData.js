export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '444a7d60damsh3e087d1e8c92c05p111e59jsn478bb76eb5d0'
  }
};

export const fetchData = async(url, options) => {
  //abstraction of a function which is going to fetch the data
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}