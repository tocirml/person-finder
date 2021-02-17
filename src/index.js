const apiUrl = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';
let email = 'jonsmith@example.com';

const helloWorld = () => {
  fetch(`${apiUrl}?email=${email}`).then((response) => {
    console.log('Hello World', response);
  });
};

helloWorld();
