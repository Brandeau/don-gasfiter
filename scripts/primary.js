import {fetchFile} from "./helpers/fetch.js";

const data = await fetchFile("../data/content.json");
const linkList = await fetchFile("../templates/linkList.hbs", "text")
const compiledlinkList = Handlebars.compile(linkList);
const navbar = document.querySelector("nav");
navbar.innerHTML = compiledlinkList(data);
const main = document.querySelector('main');
const section = await fetchFile("../templates/section.hbs", "text");
const compiledSection = Handlebars.compile(section);

function renderPath(pathname){
    if(pathname === '/index.html'){
        main.innerHTML = compiledSection(data.home);
    }else if(pathname === '/html/sarro.html'){
        main.innerHTML = compiledSection(data.sarro)
    }else if(pathname === '/html/alcantarillado.html'){
        main.innerHTML = compiledSection(data.alcantarillado)
    }else if(pathname === '/html/calefont.html'){
        main.innerHTML = compiledSection(data.calefont)
    }else if(pathname === '/html/cocina.html'){
        main.innerHTML = compiledSection(data.cocina)
    }else if(pathname === '/html/griferias.html'){
        main.innerHTML = compiledSection(data.griferias)
    }
}

renderPath(location.pathname);