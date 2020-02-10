
//  ************************************************
//             Begin Journal Exercise 11
// **************************************************

// Importing Object Functions

import addToDOM from "./entriesToDOM.js"
import eventListeners from "./eventListeners.js"



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



