(function () {
  // Code for form validation
  const $submitButton = document.querySelector('.search-form-submit');

  $submitButton.addEventListener('click', (e) => {
    if (!validateForm()) e.preventDefault();
  });

  const validateForm = () => {
    const $emailInput = document.querySelector('.search-form-email');
    const re = /\S+@\S+\.\S+/;
    if (re.test($emailInput.value)) return true;
    $emailInput.classList.add('error');
    const $error = document.querySelector('.search-form-error');
    $error.style.display = 'block';
    return false;
  };
})();
