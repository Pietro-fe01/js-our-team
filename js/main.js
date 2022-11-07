"use strict";

const cardContent = document.getElementById("card-content");

/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/ 

const teamMembers = [
    {
        foto: 'wayne-barnett-founder-ceo.jpg'   ,
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
    },

    {
        foto: 'angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
    },

    {
        foto: 'walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
    },

    {
        foto: 'angela-lopez-social-media-manager.jpg',
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
    },

    {
        foto: 'scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',
    },

    {
        foto: 'barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
    },
];

console.log(teamMembers);

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto 

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva*/

for(let i = 0; i < teamMembers.length; i++){
    const cardContentItem = document.createElement("div");
    cardContentItem.classList.add("card-content-item")
    for(let key in teamMembers[i]){
        if(key === 'foto'){
            const createImg = document.createElement("img");
            createImg.src = `img/${teamMembers[i][key]}`;
            cardContentItem.append(createImg);
        } else if (key === 'nome'){
            const titleTag = document.createElement("h3");
            titleTag.classList.add("card-name")
            titleTag.innerHTML += teamMembers[i][key];
            cardContentItem.append(titleTag);
        } else {
            const smallTag = document.createElement("small");
            smallTag.classList.add("card-role")
            smallTag.innerHTML += teamMembers[i][key];
            cardContentItem.append(smallTag);
        }
        cardContent.append(cardContentItem);
    }
};

/*BONUS 2:
Organizzare i singoli membri in card/schede
*/