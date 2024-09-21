/**
 * Fetches a file and returns either a json or a text
 * @param {string} path 
 * @param {json | text} returnFormat 
 */
async function fetchFile(path, returnFormat = "json"){
    const response = await fetch(path);
    return await returnFormat === "text"? response.text() : response.json()
}

