






// *******************************************************
//            Begin Journal Exercise 2
// *******************************************************



// const journalEntry = {
//     date: "01/18/2020",
//     conceptsCovered: "Objects and Functions",
//     entry: "I am going to get this!",
//     mood: "Zen"
// }

// const entryContainer = []

// const pushEntry = function (entry) {
//     entryContainer.push(entry)
// }

// pushEntry(journalEntry)

// console.log(entryContainer)

// ******** Me Trying to be extra in Journal 2 **********

// const postEntry = function () {
    //     document.getElementById("postText").innerHTML = "Hello";
    // }
    
    // const submitEntry = function() {
    //     document.theForm.submit().getElementById("postText").innerHTML = theForm
    
    // }
    
    // const journalEntry = {
    //     date: document.getElementById("date").getElementsByTagName("input").value,
    //     conceptsCovered: document.getElementById("concepts").getElementsByTagName("input").value,
    //     entry: document.getElementById("mainEntry").getElementsByTagName("textarea").value,
    //     mood: document.getElementById("mood").getElementsByTagName("select").value,
    //     // post: const postJournal = () {
    //     //     document.getElementById("entryContainer").innerHTML(
    //     //         `<section><h2>#date.label.value</h2>`
    //     //         )
    //     //     }
    // }








// *******************************************************
//            Begin Journal Exercise 3
// *******************************************************


// const journalEntries = [
//     {
//     date: "01/18/2020",
//     concept: "Objects and Functions",
//     entry: "I am going to get this!",
//     mood: "Zen"
// }, {
//     date: "01/20/2020",
//     concept: "Creating Components",
//     entry: "I am going to get this!",
//     mood: "Excited"
// },
// {
//     date: "01/21/2020",
//     concept: "APIs and Fetching",
//     entry: "I am going to get this!",
//     mood: "Zen"
// }
// ];

// ***Creating reference to HTML entry container***

// const entryContainer = document.querySelector("#entryContainer")


// // ***Function that creates HTML element***
// const entryHTML = (tag, content, className) => {
//     return `<${tag} class=${className}>${content}</${tag}>`;
// };

// const moodHTML = (tag, content, className) => {
//             return `<${tag} class=${className}>Mood = "${content}"</${tag}>`
// };

// // ***Function for whole entry component***

// const createEntryComponent = (entry) => `
//     <div id="entry">
//         ${entryHTML("h1", entry.date, "entryDate")}
//         ${entryHTML("h2", entry.concept, "entryConcept")}
//         ${moodHTML("h2", entry.mood, "entryMood")}
//         ${entryHTML("p", entry.entry, "entryMain")}
//     </div>
// `
// for (let i = 0; i < journalEntries.length; i++) {
//         const entry = journalEntries[i]
//         entryContainer.innerHTML += createEntryComponent(entry)
// };

// ]const addToDOM = (entry) => entryContainer.innerHTML += createEntryComponent(entry);

// journalEntries.forEach(addToDOM());






// *******************************************************
//            Begin Journal Exercise 4
// *******************************************************

const url = "http://localhost:8088/entries"
//  From 3


// ***Creating reference to HTML entry container***

const entryContainer = document.querySelector("#entryContainer")


// ***Function that creates HTML element***
const entryHTML = (tag, content, className) => {
    return `<${tag} class=${className}>${content}</${tag}>`;
};

const moodHTML = (tag, content, className) => {
            return `<${tag} class=${className}>Mood = "${content}"</${tag}>`
};

// ***Function for whole entry component***

const createEntryComponent = (entry) => `
    <div id="entry">
        ${entryHTML("h1", entry.date, "entryDate")}
        ${entryHTML("h2", entry.concept, "entryConcept")}
        ${moodHTML("h2", entry.mood, "entryMood")}
        ${entryHTML("p", entry.entry, "entryMain")}
    </div>
`
const addEntryToDom = (htmlTemplate) => {
        entryContainer.innerHTML += htmlTemplate
};

fetch(url)
    .then(entriesData => entriesData.json())
    .then(entries => {
        entries.forEach(entry => {
            const entryHTML = createEntryComponent(entry)
            addEntryToDom(entryHTML)
        })
    });

// ]const addToDOM = (entry) => entryContainer.innerHTML += createEntryComponent(entry);

// journalEntries.forEach(addToDOM());