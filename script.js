window.addEventListener('DOMContentLoaded',  fetchCharacters());

async function fetchCharacters() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json')
        const characters = await response.json();
        //console.log(response);
        console.log(characters);
    } catch (error) {
        console.error('Hiba történt az adatok lekérésekor:',error);
    }
}