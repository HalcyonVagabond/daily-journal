import {createHTML, createObjects} from "./entryComponent.js"
import dbAPI from "./data.js"


const addToDom = {

    renderEntriesToDOM(arr) {
        const newArr = arr.reverse();
        const entryContainer = document.getElementById('entryContainer');
        entryContainer.innerHTML = "";

        newArr.forEach(entry => {
            const html = createHTML.createEntryComponent(entry)
            entryContainer.innerHTML += html;
         })
    }

    // addMoodFilter() {
    //     // take array of entry objects and iterate through each
    //     const entryArray = dbAPI.getJournalEntries().then(entryArr => console.log(entryArr))
    //     entryArray.forEach(entry => {
    //         const mood = entry.mood
    //         const moodSelect 
    //     })
    //     // if an input for a mood does not exist, add mood radio button to filter fieldset
    // },


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

// working

// iterateAndAddToTop(entries) {
//     const entryContainer = document.getElementById('entryContainer')
//     entryContainer.innerHTML = ''
//     entries.reverse().forEach(entry => {
//         const entryHTML = createHTML.createEntryComponent(entry)
//         entryContainer.innerHTML += entryHTML
        
//     })
// },