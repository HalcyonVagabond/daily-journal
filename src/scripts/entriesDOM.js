import {createHTML, createObjects} from "./entryComponent.js"


const addToDom = {

    iterateAndAddToTop(entries) {
        const entryContainer = document.getElementById('entryContainer')
        entryContainer.innerHTML = ''
        entries.reverse().forEach(entry => {
            const entryHTML = createHTML.createEntryComponent(entry)
            entryContainer.innerHTML += entryHTML
            
        })
    },

    renderEntriesToDOM(arr) {
        const newArr = arr.reverse();
        const entryContainer = document.getElementById('entryContainer');
        entryContainer.innerHTML="";

        newArr.forEach(entry => {
            const html = createHTML.createEntryComponent(entry)
            entryContainer.innerHTML += html;
         })
    }
}

export default addToDom


// functions from previous exercises

// const addToDom = {

//     addEntryToDom(htmlTemplate) {
//         entryContainer.innerHTML += htmlTemplate
//     },

//     iterateAndAdd (entries) {
//         entries.forEach(entry => {
//             const entryHTML = createHTML.createEntryComponent(entry)
//             this.addEntryToDom(entryHTML)
//         })
//     }
// }