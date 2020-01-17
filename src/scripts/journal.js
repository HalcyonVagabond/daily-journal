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

// **** Journal Exercise 2 *****//

const journalEntry = {
    date: "01/18/2020",
    conceptsCovered: "Objects and Functions",
    entry: "I am going to get this!",
    mood: "Zen"
}

const entryContainer = []

const pushEntry = function (entry) {
    entryContainer.push(entry)
}

pushEntry(journalEntry)

console.log(entryContainer)
