import {fetchFile} from "./helpers/fetch.js";

/*Partials section */
const imagePartial = await fetchFile("./templates/partials/image.hbs", "text");
const paragraphPartial = await fetchFile("./templates//partials/paragraph.hbs", "text");
const listPartial = await fetchFile("./templates/partials/list.hbs", "text");
const videoPartial = await fetchFile("./templates/partials/video.hbs", "text");
const buttonPartial = await fetchFile("./templates/partials/button.hbs", "text");


Handlebars.registerPartial(
    {
        imageTemplate: imagePartial,
        paragraphTemplate: paragraphPartial,
        listTemplate: listPartial,
        videoTemplate: videoPartial,
        buttonTemplate: buttonPartial
    }
)

/*Business logic*/

const data = await fetchFile("../data/content.json");
const linkList = await fetchFile("../templates/linkList.hbs", "text")
const compiledlinkList = Handlebars.compile(linkList);
const navbar = document.querySelector("nav");
navbar.innerHTML = compiledlinkList(data);
const main = document.querySelector('main');
const section = await fetchFile("../templates/section.hbs", "text");
const compiledSection = Handlebars.compile(section);

function handleListItemClick(){
    if(event.target.id === 'sarro'){
        main.innerHTML = compiledSection(data.sarro)
    }else if(event.target.id === 'alcantarillado'){
        main.innerHTML = compiledSection(data.alcantarillado)
    }else if(event.target.id === 'calefont'){
        main.innerHTML = compiledSection(data.calefont)
    }else if(event.target.id === 'cocina'){
        main.innerHTML = compiledSection(data.cocina)
    }else if(event.target.id === 'griferias'){
        main.innerHTML = compiledSection(data.griferias)
    }
}

const navLinks = document.querySelector("nav ul")
navLinks.addEventListener("click", handleListItemClick);

main.innerHTML = compiledSection(data.home)
