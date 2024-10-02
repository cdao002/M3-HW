//ASKING FOR LANGUAGE TO BE TRANSLATED TO
let langCode = prompt ("Please input a language code (es, de, en, fr): ")

const newL = {
    es:["Spanish","Hola Mundo"],
    de: ["German", "Hallo Welt"],
    en: ["English", "Hello World"],
    fr: ["French","Bonjour le monde"]
};
const transHW = newL[langCode]|| newL["en"]

//DISPLAY TRANSLATION
console.log(`Hello World tranlated in ${transHW[0]} is: ${transHW[1]}`)