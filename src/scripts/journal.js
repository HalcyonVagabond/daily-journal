
//  ************************************************
//             Begin Journal Exercise 8
// **************************************************

// Importing Object Functions

import dbAPI from "./data.js"
import addToDOM from "./entriesToDOM.js"
import eventListeners from "./eventListeners.js"



// naming the function that pulls all of my past entries from the database
const pastEntries = () => dbAPI.getJournalEntries().then(entries => addToDOM.renderEntriesToDOM(entries))
// calling pastEntries to where the page auto-populates with my past entries
pastEntries()

// calling submit and delete event listeners

eventListeners.submitEventListener()
eventListeners.deleteEntryEventListener()
eventListeners.editEntryEventListener()
// event listener for mood filter
eventListeners.moodFilterEventListener()
// function that dynamically adds mood filters
addToDOM.addMoodFilter()




