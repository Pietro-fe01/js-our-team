"use strict";

const unorderedList = document.getElementById("un-list");

/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
*/ 

const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
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
    const listItem = document.createElement("li");
    for(let key in teamMembers[i]){
        if(key === 'foto'){
            const createImg = document.createElement("img");
            createImg.src = `img/${teamMembers[i][key]}`;
            listItem.append(createImg);
        } else {
            listItem.innerHTML += teamMembers[i][key] + " - ";
        }

        unorderedList.append(listItem);
        console.log(teamMembers[i][key]);
    }
};

/*BONUS 2:
Organizzare i singoli membri in card/schede
*/