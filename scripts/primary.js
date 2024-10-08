import {fetchFile} from "./helpers/fetch.js";

async function registerPartials(){

    Handlebars.registerPartial(
        {
            imagePartial: await fetchFile("./templates/partials/image.hbs", "text"),
            paragraphPartial: await fetchFile("./templates//partials/paragraph.hbs", "text"),
            listPartial: await fetchFile("./templates/partials/list.hbs", "text"),
            videoPartial: await fetchFile("./templates/partials/video.hbs", "text"),
            buttonPartial: await fetchFile("./templates/partials/button.hbs", "text")
        }
    )
}

async function registerHelpers(){
    Handlebars.registerHelper('boldWords', function(text, wordsToBold) {
        const re = /(?=[\s.,:;]|(?<=[\s.,;:]))/;
        const words = text.split(re);
        const boldWords = words.map(word => {
          if (wordsToBold.includes(word)) {
            return `<strong>${word}</strong>`;
          }
          return word;
        });
        return boldWords.join('');
      });
}

async function renderNavbar(data){
    const linkList = await fetchFile("../templates/linkList.hbs", "text")
    const compiledlinkList = Handlebars.compile(linkList);
    const navbar = document.getElementById("nav-links");
    navbar.innerHTML = compiledlinkList(data.links);


}

async function renderSections(data){

    const handle = await handleListItemClick.bind(null, data);

    const navLinks = document.querySelector("nav ul")
    navLinks.addEventListener("click", handle);   
    
}

function burgerIconHandler(){
    const burgerIcon = document.getElementById("burger-icon");
    const navLinks = document.getElementById("nav-links");

    burgerIcon.addEventListener("click", () => {
        
        if(window.getComputedStyle(navLinks).display === "none"){
            navLinks.style.display = "flex";
            burgerIcon.style.transform = 'rotate(90deg)';

        }else if(window.getComputedStyle(navLinks).display=== "flex"){
            navLinks.style.display = "none";
            burgerIcon.style.transform = 'rotate(0deg)'
        }
        
    })
}

async function handleListItemClick(data, event){
    const section = await fetchFile("../templates/section.hbs", "text");
    const compiledSection = Handlebars.compile(section);
    const main = document.querySelector('main');
    
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

async function renderHome(data){
    
    const section = await fetchFile("../templates/section.hbs", "text");
    const compiledSection = Handlebars.compile(section);
    const main = document.querySelector('main');
    main.innerHTML = compiledSection(data.home)

}

async function renderApp(){
    const data = await fetchFile("../data/content.json");

    await registerPartials();
    await registerHelpers();
    await renderNavbar(data);
    await renderHome(data);
    await renderSections(data)
    burgerIconHandler();
}

renderApp();
