import {fetchFile} from "./helpers/fetch.js";

const data = await fetchFile("../data/content.json");
const header = await fetchFile("../templates/header.hbs", "text")

const compiledHeaderTemplate = Handlebars.compile(header);

document.body.innerHTML = compiledHeaderTemplate(data);
