(function () {
  const apiUrl = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';
  //   let email = 'jonsmith@example.com';
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get('email');

  const fetchPersonData = async () => {
    try {
      let response = await fetch(`${apiUrl}?email=${email}`);
      const $spinner = document.querySelector('.spinner');
      $spinner.style.display = 'none';
      console.log(response);
      //   return await handleResponse(response);
    } catch (error) {
      //   handleError(error);
    }
  };

  fetchPersonData();
})();
