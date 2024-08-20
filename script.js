const input = document.querySelectorAll('input');

const handleFocus = ({ target }) =>{
}
const handleFocusOut = ({ target }) =>{
}

input.forEach((input) => input.addEventListener('focus', handleFocus));
input.forEach((input) => input.addEventListener('focusout', handleFocusOut));


const handleSubmit = (event) => {
    event.preventDefault();
    alert('enviando form..')

    const name = document.querySelector('input[name=name]'). value;
    const email = document.querySelector('input[email=emails]'). value;

    fetch('https://api.sheetmonkey.io/form/4fHpkY7VDSfiMZtDqo8ix8', {

    method: 'post',
    headers:{
        'Accept': 'application/json',
        'content-type': 'application/json',
    },
     body: JSON.stringify( {name , email }),
    
  });
}

document.querySelector('form').addEventListener('submit', handleSubmit);