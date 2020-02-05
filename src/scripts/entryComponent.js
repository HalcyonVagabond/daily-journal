
const createObjects = {
    // ****Function that creates entry object****
    entryObjectFactory (date, concepts, entry, mood) {
        return {
            'date': date,
            'concepts': concepts,
            'entry': entry,
            'mood': mood
        }
    }
}


const createHTML = {
    // ***Functions that creates HTML element***
    entryHTML(tag, content, className) {
        return `<${tag} class=${className}>${content}</${tag}>`;
    },
    moodHTML(tag, content, className) {
        return `<${tag} class=${className}>Mood = "${content}"</${tag}>`
    },

    // ***Function for whole entry component***

    createEntryComponent(entry) {
    return `
    <div id="entry">
        ${this.entryHTML("h1", entry.date, "entryDate")}
        ${this.entryHTML("h2", entry.concepts, "entryConcept")}
        ${this.moodHTML("h2", entry.mood, "entryMood")}
        ${this.entryHTML("p", entry.entry, "entryMain")}
        <button id='deleteBtn-${entry.id}' class='button'>Delete Entry</button>
    </div>
    `
    },

    createMoodFilter(mood) {
        return `
        <input type='radio' name='radio' id='filter-${mood}' value=${mood}>
        <label for='radio'>${mood}</label>
        `
    }
}

export {createHTML, createObjects}