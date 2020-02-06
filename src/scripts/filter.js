import addToDOM from "./entriesToDOM.js" 
import dbAPI from "./data.js"


const filterFunctions = {
    
    filterByMood(mood) {
        
        dbAPI.getJournalEntries().then(entries => {
            const filteredArray = entries.filter(entry => entry.mood === mood);
            
            addToDOM.renderEntriesToDOM(filteredArray) 
        });
    }
}

export default filterFunctions