(function () {
  const apiUrl = 'https://ltv-data-api.herokuapp.com/api/v1/records.json';
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const email = urlParams.get('email');

  const fetchPersonData = async () => {
    try {
      let response = await fetch(`${apiUrl}?email=${email}`);
      let person = await response.json();
      showResults(person);
    } catch (error) {
      console.log('ERROR on server side: ', error);
    }
  };

  const showResults = (person) => {
    const $spinner = document.querySelector('.spinner');
    $spinner.style.display = 'none';
    const $form = document.querySelector('.search-again');
    const $results = document.querySelector('.results');
    $form.style.display = 'block';
    $results.style.display = 'flex';
    if (person.email) {
      const $result = document.querySelector('#result-number');
      const $resultText = document.querySelector('.results-text');
      $result.innerText = 1;
      $resultText.innerText =
        'Look at the result below to see the details of the person you’re searched for.';
      let template =
        `<div class="person-card">` +
        `<div class="person-card-image"><img src="assets/SVGs/icn_person.svg" alt="Login icon" /></div>` +
        `<div class="person-card-name"><div class="person-card-title">${person.first_name} ${person.last_name}</div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>` +
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
