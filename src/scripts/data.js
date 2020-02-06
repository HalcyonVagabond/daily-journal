const baseURL = "http://localhost:8088"

const dbAPI = {

    getJournalEntries () {
        return fetch(`${baseURL}/entries`).then(response => response.json())
    },

    postJournalEntries(newJournalEntry) {
        return fetch(`${baseURL}/entries`, { // Replace "url" with your API's URL
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newJournalEntry)
        }).then(r=>r.json)
    }, 

    deleteEntry(entryId) {
        return fetch(`${baseURL}/entries/${entryId}`, {
            method: "DELETE"
        })
    },

    retrieveEntry (entryId) {
        return fetch(`${baseURL}/entries/${entryId}`)
            .then(resp => resp.json())
    },

    updateEntry(entry) {
        return fetch(`${baseURL}/entries/${entry.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(entry)
        })
    }
}

export default dbAPI