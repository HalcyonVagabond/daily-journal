import {createHTML, createObjects} from "./entryComponent.js"
import dbAPI from "./data.js"


const addToDOM = {

    postEntriesToDOM () {
        dbAPI.getJournalEntries().then(entries => addToDOM.renderEntriesToDOM(entries))
    },

    renderEntriesToDOM(arr) {
        const newArr = arr.reverse();
        const entriesContainer = document.getElementById('entriesContainer');
        entriesContainer.innerHTML = "";

        newArr.forEach(entry => {
            const html = createHTML.createEntryComponent(entry)
            entriesContainer.innerHTML += html;
         })
    },

    addMoodsToForm (container) {

        container.innerHTML += `<option value="" selected disabled hidden>Select Mood</option>`
        dbAPI.getMoods().then(moods => {
            moods.forEach(moodObj => {
                container.innerHTML += `
                <option value=${moodObj.id}>${moodObj.label}</option>
                `
            })
        });
    },

    addMoodFilter() {
        // take array of entry objects and iterate through each
        dbAPI.getJournalEntries().then(entryArray => {
            entryArray.forEach(entry => {
                const mood = entry.mood.label
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
        document.getElementById("edit-moodForTheDay").value = entry.mood
        document.getElementById("hiddenEntryId").value = parseInt(entry.id)

    }


}

export default addToDOM


