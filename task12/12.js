const signUp = e => {
    e.preventDefault();
    let formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('mail').value,
        number: document.getElementById('number').value
    }
    localStorage.setItem(formData.email,JSON.stringify(formData));
    // console.log(localStorage.getItem('Data'));
    displayData(formData);
}

function displayData(formData){
   // console.log(JSON.parse(localStorage.getItem('Data')));
  var parentElement = document.getElementById('output');
//   var childElement = document.createElement('li');

 parentElement.innerHTML = parentElement.innerHTML + `<li>${formData.name}-${formData.email}-
 ${formData.number}`;