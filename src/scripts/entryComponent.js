
const createHTML = {
    // ***Function that creates HTML element***
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
        ${this.entryHTML("h2", entry.concept, "entryConcept")}
        ${this.moodHTML("h2", entry.mood, "entryMood")}
        ${this.entryHTML("p", entry.entry, "entryMain")}
    </div>
    `
    }
}

export default createHTML