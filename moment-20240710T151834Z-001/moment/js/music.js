const musics =[{
    music: "No more drama-" ,
    author: "Charlie Puth",
},
{
    music: "Water-" ,
    author:"Tyla",
},
{
    music: "Attention-" ,
    author:"Doja Cat",
},
{
    music: "Espresso-" ,
    author:"Sabrina Carpenter",
},
{
    music: "Last Man Standing-" ,
    author:"Livingston",
},
{
    music: "Rescue Me-" ,
    author:"OneRepublic",
},
{
    music: "Too Sweet-" ,
    author:"Hozier",
},
{
    music: "Waterbed-" ,
    author:"Hearts&Colors",
},
{
    music: "Players-" ,
    author:"Coi Leray",
},
{
    music: "Zombies-",
    author:"Johnny",
},
];

const music= document.querySelector("#music span:first-child");
const author= document.querySelector("#music span:last-child");

const todaysMusic= musics[Math.floor(Math.random() * musics.length)];

music.innerText = todaysMusic.music;
author.innerText =todaysMusic.author;
