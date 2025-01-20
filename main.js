const pirates = [
    {
        name: 'Monkey D. Luffy',
        bounty: 3000000000, // 3 mil millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/luffy.jpg'
    },
    {
        name: 'Roronoa Zoro',
        bounty: 1111000000, // 1.111 mil millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/zoro.jpg'
    },
    {
        name: 'Nami',
        bounty: 366000000, // 366 millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/nami.jpg'
    },
    {
        name: 'Usopp',
        bounty: 500000000, // 500 millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/god_usopp.webp'
    },
    {
        name: 'Sanji',
        bounty: 1032000000, // 1.032 mil millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/vinsmoke_sanji.jpg'
    },
    {
        name: 'Tony Tony Chopper',
        bounty: 1000, // 1 mil (¡Sí, es real!)
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/chopper.png'
    },
    {
        name: 'Nico Robin',
        bounty: 930000000, // 930 millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/nico_robin.jpg'
    },
    {
        name: 'Franky',
        bounty: 394000000, // 394 millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/franky.png'
    },
    {
        name: 'Brook',
        bounty: 383000000, // 383 millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/brook.jpg'
    },
    {
        name: 'Jinbe',
        bounty: 1100000000, // 1.1 mil millones
        crew: 'Mugiwaras',
        image: './assets/mugiwaras/jinbe.jpg'
    },
    {
        name: 'Shanks',
        bounty: 4048900000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/shanks.png'
    },
    {
        name: 'Ben Beckmann',
        bounty: 3559000000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/ben_beckman.jpg'
    },
    {
        name: 'Yassop',
        bounty: 400000000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/yassop.jpg'
    },
    {
        name: 'Lucky Roux',
        bounty: 933000000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/lucky_roux.jpg'
    },
    {
        name: 'Bonk Punch',
        bounty: 733000000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/bonk_punch.jpg'
    },
    {
        name: 'Lime Juice',
        bounty: 865000000,
        crew: 'Red Head Pirates',
        image: './assets/redheadpirates/Lime_juice.jpg'
    },
    {
        name: 'Buggy',
        bounty: 3189000000,
        crew: 'Cross Guild',
        image: './assets/crossguild/buggy.png'
    },
    {
        name: 'Dracule Mihawk',
        bounty: 3500000000,
        crew: 'Cross Guild',
        image: './assets/crossguild/dracule_mihawk.jpg'
    },
    {
        name: 'Sir. Crocodile',
        bounty: 1965000000,
        crew: 'Cross Guild',
        image: './assets/crossguild/sir_crocodile.png'
    },
    {
        name: 'Marshall D Teach',
        bounty: 3996000000,
        crew: 'Black Beard Pirates',
        image: './assets/blackbeardpirates/black_beard.png'
    },
    {
        name: 'Jesus Burgess',
        bounty: 850000000,
        crew: 'Black Beard Pirates',
        image: './assets/blackbeardpirates/jesus_burguess.jpg'
    },
    {
        name: 'Kuzan',
        bounty: 1110000000,
        crew: 'Black Beard Pirates',
        image: './assets/blackbeardpirates/Kuzan.jpg'
    },
    {
        name: 'Laffitte',
        bounty: 450000000,
        crew: 'Black Beard Pirates',
        image: './assets/blackbeardpirates/laffite.jpg'
    },
    {
        name: 'Shiryu',
        bounty: 900000000,
        crew: 'Black Beard Pirates',
        image: './assets/blackbeardpirates/shiryu.jpg'
    }
];
const pirateCrews = ["Mugiwara", "Red Head Pirates", "Cross Guild", "Black Beard Pirates"];
//RECUPERO EL MAIN

const main = document.querySelector("main");

//VOY A CREAR ELEMENTOS DE HTML POR JS PARA PRACTICAR

const section = document.createElement("section");
const navBar = document.createElement("nav");

//AÑADIMOS AL HTML 

for (const crew of pirateCrews) {
    const button = document.createElement("button");
    button.innerText = crew;
    navBar.appendChild(button);
}

main.appendChild(navBar);

for (const pirate of pirates) {
    const article = document.createElement("article");
    article.classList = "pirate";
    article.innerHTML = `
    <img src="${pirate.image}" alt="imagen del pirata">
    <h2>${pirate.name}</h2>
    <p>${pirate.bounty}</p>
    <h3>${pirate.crew}</h3>
    `
    section.appendChild(article);
}

main.appendChild(section);



   
