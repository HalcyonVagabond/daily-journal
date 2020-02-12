
const createObjects = {
    // ****Function that creates entry object****
    entryObjectFactory (date, concepts, entry, moodId) {
        return {
            'date': date,
            'concepts': concepts,
            'entry': entry,
            'moodId': parseInt(moodId)
        }
    }
}


const createHTML = {
    // ***Functions that creates HTML element***
    entryHTML(tag, content, className) {
        return `<${tag} class='${className}'>${content}</${tag}>`;
    },
    moodHTML(tag, content, className) {
        return `<${tag} class='${className}'>Mood = "${content}"</${tag}>`
    },

    // ***Function for whole entry component***

    createEntryComponent(entry) {
    return `
    <div class="entry" id="entry-${entry.id}">
        ${this.entryHTML("h1", this.changeDateDisplay(entry.date), "entryDate")}
        ${this.entryHTML("h2", entry.concepts, "entryConcept")}
        ${this.entryHTML("p", entry.entry, "entryMain")}
        ${this.moodHTML("h2", entry.mood.label, "entryMood")}
        <div class='entryButtons'>
            <button id='deleteBtn-${entry.id}' class='button'>Delete Entry</button>
            <button id='editBtn-${entry.id}' class='button'>Edit Entry</button>
        </div>
    </div>
    `
    },

    changeDateDisplay(date) {
        const dateArr = date.split('-');
        
        return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
    },

    // function for creating mood radio buttons
    createMoodFilter(mood) {
        return `
        <input type='radio' name='radio' id='filter-${mood}' value=${mood}>
        <label for='radio'>${mood}</label>
        `
    },

    createEntryEditForm (entryId) {
        return `
        <article id="editContainer-${entryId}">
        <input type="hidden" id="hiddenEntryId" value="" />
        <form name="editForm" action="">
            <fieldset form="editForm" id="edit-date">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="edit-journalDate">
            </fieldset>
            <fieldset form="editForm" id="edit-concepts">
                <label for="conceptsCovered">Concepts covered</label>
                <input type="text" name="conceptsCovered" id="edit-conceptsCovered">
            </fieldset>
            <fieldset form="editForm" id="edit-mainEntry">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="edit-journalEntry"></textarea>
            </fieldset>
            <fieldset form="editForm" id="edit-Mood">
                <label for="moodForTheDay">Mood for the day</label>
                <select name="moodForTheDay" id="edit-moodForTheDay">
                    
                </select>
            </fieldset>
        </form>
        <button id='deleteBtn-${entryId}' class='button'>Delete Entry</button>
        <button id='saveBtn-${entryId}' class='button'>Save Entry</button>
    </article>
        `
    }
}

export {createHTML, createObjects}