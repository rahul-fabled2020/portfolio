const BASE_URL = "https://api.github.com/users/rahul-fabled2020";

function get(url="") {
  return fetch(`${BASE_URL}${url}`)
  .then(response => {
    if(response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  });
}

export default {get};