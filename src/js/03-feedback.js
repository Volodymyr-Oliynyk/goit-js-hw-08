import throttle from "lodash.throttle";

const feedbackForm = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};

const getValue = localStorage.getItem(FEEDBACK_KEY);
const dataValueSave = JSON.parse(getValue);

const onInputData = e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
  };

  const onFormSubmit = e => {
    e.preventDefault();
 
    if (feedbackForm.elements.email.value == '' || feedbackForm.elements.message.value == '') {
      alert('Всі поля мають бути заповнені');
      return;
    }
    localStorage.removeItem(FEEDBACK_KEY);
    e.currentTarget.reset();
    console.log(formData);

  };
    
  saveInputData();

  function saveInputData() {
    if (dataValueSave) {
      Object.keys(dataValueSave).forEach(item => (feedbackForm[item].value = dataValueSave[item]));
    }
  }

  
  feedbackForm.addEventListener('input', throttle(onInputData, 500));
  feedbackForm.addEventListener('submit', onFormSubmit);