import { CustomHeader } from "./header.js";

customElements.define('custom-header', CustomHeader);

const myHeader = new CustomHeader();
const main = document.getElementsByTagName('main')[0];
// Append the instance to the body
main.appendChild(myHeader);