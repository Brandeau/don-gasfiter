const data = await fetch("../data/content.json");
const dataJson = await data.json();
const header = await fetch('../templates/header.hbs');
const headerTemplate = await header.text();
const compiledHeaderTemplate = Handlebars.compile(headerTemplate);

document.body.innerHTML = compiledHeaderTemplate(dataJson);
