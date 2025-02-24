
document.getElementById('alert-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    alert(`Hi ${name}!`);
  });
  
  
  const changeColorBtn = document.getElementById('change-color-btn');
  changeColorBtn.addEventListener('click', function () {
    const body = document.body;
    if (body.style.backgroundColor === 'rgb(255, 204, 203)') {
      body.style.backgroundColor = '#e6e6fa';
    } else {
      body.style.backgroundColor = '#ffcccb';
    }
  });
  

  document.getElementById('text-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const textInput = document.getElementById('text-input').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(textInput)) {
      alert('Text contains special characters!');
    } else {
      alert('Text is valid!');
    }
  });
  
 
  document.getElementById('add-text-btn').addEventListener('click', function () {
    const heading = document.querySelector('h1');
    if (!heading) {
      const newHeading = document.createElement('h1');
      newHeading.textContent = 'Add Text';
      document.body.prepend(newHeading);
    } else {
      heading.textContent += ' Add Text';
    }
  });