/**
 { 
  "api": 1,
  "name": "Slugify",
  "description": "Converts selected line to a URL-friendly slug",
  "author": "Pradeep Gowda @btbytes",
  "icon": "scissors",
  "tags": "url,trim,slug,convert,format"
}
**/

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumerics to hyphen
    .replace(/^-+|-+$/g, ""); // trim hyphens
}

function main(state) {
  state.text = slugify(state.text);
}


/** Note:  2025-08-03
 * I wrote the first version of this using ChatGPT, but it got 
 * 1. the metadata JSON format wrong and formatted like Javadoc
 * 2. it did not operate on state.text but instead directly on the object
 */

