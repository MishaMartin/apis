const pDemo = document.getElementById('demo')
let btn = document.querySelector('residents-button')
function btnClick(event){
    axios.get("https://swapi.dev/api/planets/2").then(response => {for(let i=0; i<response.data.residents.length; i++){
        axios.get(response.data.residents[i])
        .then(res =>{
            const person = document.createElement('li')
            person.textContent = (res.data.name)
            pDemo.appendChild(person)
            console.log(res.data.name)
        })
    }})
    .catch(error => {
        console.log(error)
    })
}
document.addEventListener('click', btnClick)