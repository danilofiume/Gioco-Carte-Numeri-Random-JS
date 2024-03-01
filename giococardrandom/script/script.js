// ecco il codice per "estrarre" un numero random tra 1 e 10:
const numero = Math.floor(Math.random() * 10 + 1);


// creare variabili  con numeri random in ogni carta, al click del pulsante  gioca si attivano i numeri


const you = document.getElementById('you');

const cpu = document.getElementById('cpu');

const message = document.getElementById('message');

const gioca = document.getElementById('play-button');



gioca.addEventListener('click', function()

{
    const numberCard1 = Math.floor(Math.random() * 10 + 1);;
    console.log(numberCard1);

    const numberCard2 = Math.floor(Math.random() * 10 + 1);;
    console.log(numberCard2);

    const img = document.getElementById('img');

    

    you.innerHTML = numberCard1
    cpu.innerHTML = numberCard2

    if (numberCard1 > numberCard2) {
        
        message.innerHTML = 'Hai Vinto!';



        console.log(message.innerHTML);
        
        message.style.color = 'green';
        
        you.style.backgroundColor = 'green';

        cpu.style.backgroundColor = 'red';

        you.style.color = 'white';

        cpu.style.color = 'white';

        
    } 
    
    else if (numberCard1 == numberCard2) {

        message.innerHTML = 'Hai pareggiato!'

        console.log(message.innerHTML);

        message.style.color = 'yellow';

        you.style.backgroundColor = 'yellow';

        you.style.color = 'black';

        cpu.style.backgroundColor = 'yellow';

        cpu.style.color = 'black';


        


        
        
    } else {
        message.innerHTML = 'Hai perso!';

        console.log(message.innerHTML);

        you.style.backgroundColor = 'red';

        cpu.style.backgroundColor = 'green';

        message.style.color = 'red';

        you.style.color = 'white';

        cpu.style.color = 'white';

        
    }
}


)