
//  ************************************************
//             Begin Journal Exercise 12
// **************************************************

// Importing Object Functions

import addToDOM from "./entriesToDOM.js"
import eventListeners from "./eventListeners.js"
import dbAPI from "./data.js"

const moodSelectContainer = document.getElementById('moodForTheDay')
addToDOM.addMoodsToForm(moodSelectContainer)
// calling pastEntries to where the page auto-populates with my past entries
addToDOM.postEntriesToDOM()

// calling submit and delete event listeners

eventListeners.submitEventListener()
eventListeners.deleteEntryEventListener()
eventListeners.editEntryEventListener()
eventListeners.saveEditedEntryEventListener()
// event listener for mood filter
eventListeners.moodFilterEventListener()
// function that dynamically adds mood filters
addToDOM.addMoodFilter()
// search event listener
eventListeners.searchEntryEventListener()










// ****Successfully dynamically added instructorId key:value pair to entries, but messed up with the getEntries and added expanded mood key:value

// function addingInstructorsToDb() {
//     dbAPI.getJournalEntries().then(entries => {
//         const arrWithInstructor = []
        
//         entries.forEach(entryObj => {
//             const instructorKey = "instructorId"
//             const instructorValue = 1

//             entryObj[instructorKey] = instructorValue
            
//             arrWithInstructor.push(entryObj)
//         })
        
//         arrWithInstructor.forEach(entry => {
//             dbAPI.updateEntry(entry)
//         })
//     })
// }

// addingInstructorsToDb()


// **** Delete mood key:value pair from all entries

// function deleteMood () {

//     // temporarily altered getJournalEntries to where it wouldn't expand mood
//     // except I didn't save, but it worked anyways! Interesting!


//     dbAPI.getJournalEntries().then(entries => {
//         const noMoodArray = entries.map(entry => {
//             delete entry.mood
//             return entry
//         });

//         noMoodArray.forEach(entry => {
//             dbAPI.updateEntry(entry)
//         })
//     });
// }

// deleteMood()

// SUCCESS!!!!!!!