import {createHTML, createObjects} from "./entryComponent.js"
import dbAPI from "./data.js"


const addToDOM = {

    renderEntriesToDOM(arr) {
        const newArr = arr.reverse();
        const entriesContainer = document.getElementById('entriesContainer');
        entriesContainer.innerHTML = "";

        newArr.forEach(entry => {
            const html = createHTML.createEntryComponent(entry)
            entriesContainer.innerHTML += html;
         })
    },

    addMoodFilter() {
        // take array of entry objects and iterate through each
        dbAPI.getJournalEntries().then(entryArray => {
            entryArray.forEach(entry => {
                const mood = entry.mood
                const moodSelect = document.getElementById(`filter-${mood}`)
                const filterButtonContainer = document.getElementById('radioButtons')
                
                if (moodSelect === null) {
                    filterButtonContainer.innerHTML += createHTML.createMoodFilter(mood)
                }
            })
        })
    },

    editFormEntry(entry) {
        const entryContainer = document.getElementById(`entry-${entry.id}`);

        entryContainer.innerHTML = createHTML.createEntryEditForm(entry.id)

        document.getElementById("edit-journalDate").value = entry.date
        document.getElementById("edit-conceptsCovered").value = entry.concepts
        document.getElementById("edit-journalEntry").value = entry.entry
        document.getElementById("edit-MoodForTheDay").value = entry.mood
    }


}

export default addToDOM


