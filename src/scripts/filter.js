import addToDOM from "./entriesToDOM.js" 
import dbAPI from "./data.js"


const filterFunctions = {
    
    filterByMood(mood) {
        
        dbAPI.getJournalEntries().then(entries => {
            const filteredArray = entries.filter(entry => entry.mood === mood);
            
            addToDOM.renderEntriesToDOM(filteredArray) 
        });
    },

    findSearchedEntries(searchCriteria) {
        dbAPI.getJournalEntries()
            .then(entriesArr => {
                const relevantEntriesArray = []
                entriesArr.forEach(entry => {
                    
                    for (const values of Object.values(entry)){
                        
                        if (values.toString().includes(searchCriteria) || values.toString().toLowerCase().includes(searchCriteria)) {
                            return relevantEntriesArray.push(entry)
                        }
                    }                    
                })
                addToDOM.renderEntriesToDOM(relevantEntriesArray)
            });
    }
}

export default filterFunctions