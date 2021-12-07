//Localité affichée par defaut lors de la connexion à l'application
let localite = 'paris';
// Indique la T° de Paris, par defaut, lors de la 1° connexion à l'appli
recevoirTemperature(localite);

function recevoirTemperature(localite) {
  // url de l'API
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    localite +
    '&appid=7171e2538f462d5e6154f757362da001&units=metric';

  // Création de la requête
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // Stockage de la réponse
        let temperature = reponse.main.temp; // Récupère la température en C°
        let ville = reponse.name; // récupère le nom de la ville
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      } else {
        alert('Un problème est survenu, veuillez revenir plus tard !');
      }
    }
  };
}

// Modification de la localité mise par defaut, par l'utilisateur via le bouton "CHANGER DE VILLE"
let bouton = document.querySelector('#changer');
bouton.addEventListener('click', () => {
  localite = prompt('Indiquer le nom de la ville désirée !');
  recevoirTemperature(localite); // Appel la fonction qui permet d'afficher la nouvelle ville, ainsi que sa T°
});
