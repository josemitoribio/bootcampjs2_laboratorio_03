import "./style.css";

//Módulo 3 - Variables - Laboratorio

interface GruposMusicales {
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const popRock: string = "🎵 Pop Rock";
const rock: string = "🎸 Rock";
const hardRock: string = "🤘 Hard Rock";
const clasica: string = "🎼 Clásica";

const grupoA: GruposMusicales = {
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: popRock,
};

const grupoB: GruposMusicales = {
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: rock,
};

const grupoC: GruposMusicales = {
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: hardRock,
};

const grupoD: GruposMusicales = {
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: clasica,
};

const grupoE: GruposMusicales = {
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: rock,
};

const estiloTitulo: string = "font-weight:800; font-size:15px; background-color:green;";

//Grupo A
console.log (`%c${grupoA.nombre}`, estiloTitulo,`/ ${grupoA.año} / ${grupoA.activo} / ${grupoA.genero}`);

//Grupo B
console.log (`%c${grupoB.nombre}`, estiloTitulo, `/ ${grupoB.año} / ${grupoB.activo} / ${grupoB.genero}`);

//Grupo C
console.log (`%c${grupoC.nombre}`, estiloTitulo, `/ ${grupoC.año} / ${grupoC.activo} / ${grupoC.genero}`);

//Grupo D
console.log (`%c${grupoD.nombre}`, estiloTitulo, `/ ${grupoD.año} / ${grupoD.activo} / ${grupoD.genero}`);

//Grupo E
console.log (`%c${grupoE.nombre}`, estiloTitulo, `/ ${grupoE.año} / ${grupoE.activo} / ${grupoE.genero}`);