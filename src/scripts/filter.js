import addToDom from "./entriesDOM.js" 
import dbAPI from "./data.js"


const filterFunctions = {
    
    filterByMood(mood) {
        
        dbAPI.getJournalEntries().then(entries => {
            const filteredArray = entries.filter(entry => entry.mood === mood);
            
            addToDom.renderEntriesToDOM(filteredArray) 
        });
    }
}

export default filterFunctions