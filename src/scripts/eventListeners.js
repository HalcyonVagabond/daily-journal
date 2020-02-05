
import dbAPI from "./data.js"
import {createObjects, createHTML} from "./entryComponent.js"
import addToDom from "./entriesDOM.js"
import filterFunctions from "./filter.js"

const entryContainer = document.getElementById('entryContainer');

const eventListeners = {
    
    submitEventListener () {
        const submitButton = document.getElementById('submit')

        const entryDate = document.getElementById('journalDate')
        const entryConcepts = document.getElementById('conceptsCovered')
        const entryMain = document.getElementById('journalEntry')
        const entryMood = document.getElementById('moodForTheDay')

        submitButton.addEventListener('click', () => {
            // creating entry object
            const entryObject = createObjects.entryObjectFactory(entryDate.value, entryConcepts.value, entryMain.value, entryMood.value);
            // posting entryObject to database
            if (entryDate.value == "" || entryConcepts.value == "" || entryMain.value == "" || entryMood.value == "") {
                alert('Please fill out all inputs! Thanks :) You dah man!')
            } else {
                return dbAPI.postJournalEntries(entryObject)
                .then(dbAPI.getJournalEntries)
                .then(addToDom.renderEntriesToDOM)
            // repopulating with updated database
            }    
        });
    }, 

    deleteEntryEventListener() {
        entryContainer.addEventListener('click', (event) => {

            if (event.target.id.startsWith("deleteBtn")){
                const entryId = event.target.id.split('-')[1];
                dbAPI.deleteEntry(entryId)
                .then(dbAPI.getJournalEntries)
                .then(addToDom.renderEntriesToDOM)
            }
        })
    },

    moodFilterEventListener() {
        const filterFieldset = document.getElementById('filterByMood');
        filterFieldset.addEventListener('click', event => {

            if (event.target.type == 'radio') {
                filterFunctions.filterByMood(event.target.value)
            };
        });
    }
}



export default eventListeners