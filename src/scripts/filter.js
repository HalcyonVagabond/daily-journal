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
                    
                    //  Must refactor search functionality now that db is changed :( journal 12

                    // for (const keys of Object.keys(entry)){
                    //     if (keys === "mood") {
                    //         for (const value of Object.values(entry)){
                    //             if (value.toString().includes(searchCriteria) || value.toString().toLowerCase().includes(searchCriteria)) {
                    //                 return relevantEntriesArray.push(entry) 
                    //             }
                    //         }
                            
                    //     } else if (keys === "instructor") {
                    //         for (const value of Object.values(entry)){
                    //             if (value.toString().includes(searchCriteria) || value.toString().toLowerCase().includes(searchCriteria)) {
                    //                 return relevantEntriesArray.push(entry) 
                    //             }
                    //         }
                    //     }

                    // }
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