(function () {
  const $submitButton = document.querySelector('.search-form-submit');

  $submitButton.addEventListener('click', (e) => {
    if (!validateForm()) e.preventDefault();
  });

  const validateForm = () => {
    const $email = document.querySelector('.search-form-email');
    const re = /\S+@\S+\.\S+/;
    if (re.test($email.value)) {
      return true;
    }
    $email.classList.add('error');
    const $error = document.querySelector('.search-form-error');
    $error.style.display = 'block';
    return false;
  };
})();
