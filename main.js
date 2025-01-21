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


/* recuperamos los botones para realizar un filtro por [crew] */

const showAllPiratesBtn = document.getElementById("showAllPirates");
const mugiwarasBtn = document.getElementById("mugiwaras");
const redHeadPiratesBtn = document.getElementById("redHeadPirates");
const blackBeardPiratesBtn = document.getElementById("blackBeardPirates");
const crossGuildBtn = document.getElementById("crossGuild");

/* creo la funcion que pintará todos los piratas  */

const showAll = (pirates = showCrew) => {
    //recuperamos el section donde pintaremos los piratas
    
    const sectionPirates = document.getElementById("piratesShow");
    sectionPirates.innerHTML = "";
    //recorremos el array con forEach para pintar cada pirata.
    pirates.forEach(pirate =>{
        const article = document.createElement("article");
        article.classList = "pirate";
        article.innerHTML = `
        <img src="${pirate.image}" alt="imagen del pirata">
        <h3>${pirate.name}</h3>
        <p>${pirate.bounty}</p>
        <h4>${pirate.crew}</h4>
        `;
        sectionPirates.appendChild(article);
    });
}

/* creo la funcion para filtrar a los piratas */

const filteredPirates = (crew) =>{
    const showCrew = pirates.filter(pirate => pirate.crew === crew)
    showAll(showCrew);
}

mugiwarasBtn.addEventListener("click", () =>{
    filteredPirates('Mugiwaras');
});

redHeadPiratesBtn.addEventListener("click", () =>{
    filteredPirates('Red Head Pirates');
});

blackBeardPiratesBtn.addEventListener("click", () =>{
    filteredPirates('Black Beard Pirates');
});

crossGuildBtn.addEventListener("click", () =>{
    filteredPirates('Cross Guild');
});
showAllPiratesBtn.addEventListener("click", () =>{
    showAll(pirates);
});




showAll(pirates);


   
