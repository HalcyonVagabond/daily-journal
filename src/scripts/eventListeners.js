
import dbAPI from "./data.js"
import {createObjects, createHTML} from "./entryComponent.js"
import addToDOM from "./entriesToDOM.js"
import filterFunctions from "./filter.js"

const entriesContainer = document.getElementById('entriesContainer');

const eventListeners = {
    
    submitEventListener () {
        const submitButton = document.getElementById('submit')

        const entryDate = document.getElementById('journalDate')
        const entryConcepts = document.getElementById('conceptsCovered')
        const entryMain = document.getElementById('journalEntry')
        const entryMood = document.getElementById('moodForTheDay')
        const entryInstructor = document.getElementById('mainInstructor')

        submitButton.addEventListener('click', () => {
            // creating entry object
            const entryObject = createObjects.entryObjectFactory(entryDate.value, entryConcepts.value, entryMain.value, entryMood.value, entryInstructor.value);
            // posting entryObject to database
            if (entryDate.value == "" || entryConcepts.value == "" || entryMain.value == "" || entryMood.value == "" || entryInstructor == "") {
                alert('Please fill out all inputs! Thanks :) You dah man!')
            } else {
                dbAPI.postJournalEntries(entryObject)
                .then(dbAPI.getJournalEntries)
                .then(addToDOM.renderEntriesToDOM)

                entryDate.value = ""
                entryConcepts.value = ""
                entryMain.value = ""
                entryMood.value = ""
                entryInstructor = ""
            // repopulating with updated database
            } 
            
        });
    }, 
    
    moodFilterEventListener() {
        const filterFieldset = document.getElementById('filterByMood');
        filterFieldset.addEventListener('click', event => {

            if (event.target.type == 'radio') {
                filterFunctions.filterByMood(event.target.value)
            };
        });
    }, 
    
    searchEntryEventListener() {
        const searchBar = document.getElementById('searchBar')

        searchBar.addEventListener('keyup', () => filterFunctions.findSearchedEntries(searchBar.value));   
        
    },

    deleteEntryEventListener() {
        entriesContainer.addEventListener('click', (event) => {
        
            if (event.target.id.startsWith("deleteBtn")){
                const entryId = event.target.id.split('-')[1];
                dbAPI.deleteEntry(entryId)
                .then(dbAPI.getJournalEntries)
                .then(addToDOM.renderEntriesToDOM)
            }
        })
    },

    editEntryEventListener() {
        entriesContainer.addEventListener('click', (event) => {
        
            if (event.target.id.startsWith("editBtn")){
                const entryId = event.target.id.split('-')[1];
                
                dbAPI.retrieveEntry(entryId)
                    .then(entry => {
                        console.log(entry)
                        addToDOM.editFormEntry(entry)
                    });


                // .then(dbAPI.getJournalEntries)
                // .then(addToDOM.renderEntriesToDOM)
            }
        })
    },

    saveEditedEntryEventListener() {
        entriesContainer.addEventListener('click', (event) => {
     
            if (event.target.id.startsWith("saveBtn")){
                
                const editedDate = document.getElementById("edit-journalDate").value
                const editedConcepts = document.getElementById("edit-conceptsCovered").value
                const editedEntry = document.getElementById("edit-journalEntry").value
                const editedMood = document.getElementById("edit-moodForTheDay").value
                const editedInstructor = document.getElementById("edit-mainInstructor").value
                const editedId = document.getElementById("hiddenEntryId").value
            
                const editedEntryObject = createObjects.entryObjectFactory(editedDate, editedConcepts, editedEntry, editedMood, editedInstructor)
                editedEntryObject.id = parseInt(editedId)

                dbAPI.updateEntry(editedEntryObject)
                    .then(addToDOM.postEntriesToDOM)
                
            }
                

        })
    }

}



export default eventListeners