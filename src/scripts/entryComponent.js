
const createObjects = {
    // ****Function that creates entry object****
    entryObjectFactory (date, concepts, entry, moodId, instructorId) {
        return {
            'date': date,
            'concepts': concepts,
            'entry': entry,
            'moodId': parseInt(moodId),
            'instructorId': parseInt(instructorId)
        }
    }
}


const createHTML = {
    // ***Functions that creates HTML element***
    entryHTML(tag, content, className) {
        return `<${tag} class='${className}'>${content}</${tag}>`;
    },

    // ***Function for whole entry component***

    createEntryComponent(entry) {
    return `
    <div class="entry" id="entry-${entry.id}">
        ${this.entryHTML("h1", this.changeDateDisplay(entry.date), "entryDate")}
        ${this.entryHTML("h2", entry.concepts, "entryConcept")}
        ${this.entryHTML("p", entry.entry, "entryMain")}
        ${this.entryHTML("h3", `Mood: ${entry.mood.label}`, "entryMood")}
        ${this.entryHTML("h3", `Primary Instructor: ${entry.instructor.firstName}`, "entryInstructor")}
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
            <fieldset>
                <select name="mainInstructor" id="edit-mainInstructor">
                    <option value="" selected disabled hidden>Select Main Instructor</option>
                    <option value=1>Andy</option>
                    <option value=2>Bryan</option>
                    <option value=3>Kristen</option>
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