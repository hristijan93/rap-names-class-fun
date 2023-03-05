document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
    const rapperName = document.querySelector('input').value;
    
    try{
        const response = await fetch(`http://localhost:8000/api/${rapperName}`);
        const data = await response.json();

        console.log(data)
        document.querySelector('h2').innerText = 'Birth Name: ' + data.birthName
    } catch(error) {
        console.log(error)
    }
}