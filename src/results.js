(function () {
  // very basin, bunch of variables for the api call
  const apiUrl = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get('email');

  // I used fetch to get the data from the api, and async/await
  const fetchPersonData = async () => {
    try {
      let response = await fetch(`${apiUrl}?email=${email}`);
      let person = await response.json();
      showResults(person);
    } catch (error) {
      console.log('Error on server side: ', error);
    }
  };

  //  once the Api resolves successfully I change the UI, removing the spinner and showing the results + the form to try another search
  // probably there are better ways to do this with Vanilla JS but I just went for something basic
  const showResults = (person) => {
    const $spinner = document.querySelector('.spinner');
    $spinner.style.display = 'none';

    const $form = document.querySelector('.search-again');
    const $results = document.querySelector('.results');
    $form.style.display = 'block';
    $results.style.display = 'flex';

    // If more than one result was possible from the API, I would have checked for length, and do a map for each result, and display the corresponding cards
    // but since a email is personal, I guess it doesnt make much sense to expect multiple persons as results
    if (person.email) {
      const $result = document.querySelector('#result-number');
      const $resultText = document.querySelector('.results-text');
      $result.innerText = 1;
      $resultText.innerText =
        'Look at the result below to see the details of the person you’re searched for.';
      // I decided to create a template only for the person card, since is the most dynamic
      //Note: I didnt see the birthdate or age on the info returned by the API, so I didnt include it
      let template =
        `<div class="person-card">` +
        `<div class="person-card-image"><img src="assets/SVGs/icn_person.svg" alt="Login icon" /></div>` +
        `<div class="person-card-name"><div class="person-card-title">${person.first_name} ${person.last_name}` +
        `</div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>` +
        `<div class="person-card-address"><div class="person-card-title-small">Address</div>${person.address}</div>` +
        `<div class="person-card-phone"><div class="person-card-title-small">Phone Numbers</div>${person.phone_numbers
          .map((number) => `<div>${number}</div>`)
          .join('')}</div>` +
        `<div class="person-card-email"><div class="person-card-title-small">Email</div>${person.email}</div>` +
        `<div class="person-card-relatives"><div class="person-card-title-small">Relatives</div>${person.relatives
          .map((relative) => `<div>${relative}</div>`)
          .join('')}</div>` +
        `</div>`;
      $results.insertAdjacentHTML('beforeend', template);
    }
  };

  fetchPersonData();
})();
