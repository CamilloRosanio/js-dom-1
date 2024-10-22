console.log('JS CONNECTION OK')

/*
Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
Per fare questo bonus potremmo aver bisogno di del metodo string.includes() */



// Dichiaro prima di tutto delle costanti dove prendo le entità dall'HTML tramite ID/Classe/Altro
const myButton = document.getElementById('myButton');
const myLamp = document.getElementById('myLamp');

// Definisco la FUNZIONE che dovrà svolgere il mio bottone. In questo caso mi serve cambiare il src="" del tag img.
// Al contempo, se voglio cambiare la scritta al bottone devo modificare il suo Inner Text insieme al src="" dell'img.
myButton.addEventListener('click', () => {
    const lampSrc = myLamp.getAttribute('src');
    console.log(lampSrc);

    if (lampSrc.includes('./img/white_lamp.png')) {
        myLamp.setAttribute('src', './img/yellow_lamp.png');
        myButton.innerText('Spegni');
    } else if (lampSrc.includes('./img/yellow_lamp.png')) {
        myLamp.setAttribute('src', './img/white_lamp.png')
        myButton.innerText('Accendi');
    }
    }
)

// Aggiungo un EventListener al bottone, che nello specifico ascolti i Click (esistono categorie predefinite di eventi, non è un valore testuale casuale).
// Definisco la funzione che dovrà svolgere il bottone una volta ascoltato il Click.


// al contempo, in base al SRC dell immagine cambio la scritta del bottone