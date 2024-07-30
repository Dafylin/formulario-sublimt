
const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name=name]'). value;
    const email = document.querySelector('input[email=emails]'). value;

    fetch('https://api.sheetmonkey.io/form/kn9s6bN7sX9MxDbStsD93s', {

    method: 'post',
    headers:{
        'Accept': 'application/json',
        'content-type': 'application/json',
    },
     body: JSON.stringify( {name , email }),
    
  });
}

document.querySelector('form').addEventListener('submit', handleSubmit);