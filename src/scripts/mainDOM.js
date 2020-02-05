const journalFormContainer = document.getElementById('formContainer')

const createJournalForm = () => 
    journalFormContainer.innerHTML += `
    <form name="theForm" action="">
        <fieldset form="theForm" id="date">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
        <fieldset form="theForm" id="concepts">
            <label for="conceptsCovered">Concepts covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">
        </fieldset>
        <fieldset form="theForm" id="mainEntry">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" placeholder="Type Entry Here"></textarea>
        </fieldset>
        <fieldset form="theForm" id="mood">
            <label for="moodForTheDay">Mood for the day</label>
            <select name="moodForTheDay" id="moodForTheDay">
                <option value="" selected disabled hidden>Select Mood</option>
                <option>Zen</option>
                <option>Calm</option>
                <option>Determined</option>
                <option>Happy</option>
                <option>Hopeful</option>
                <option>Numb</option>
                <option>Fine</option>
                <option>Anxious</option>
                <option>Nervous</option>
                <option>Stressed</option>
                <option>Angry</option>
                <option>Sad</option>
                <option>Hallucinating</option>
                <option>Everything is FINE!!!</option>
            </select>
        </fieldset>
    </form>
    <button id="submit" class="button" type="button" value="submit entry">Submit Entry</button>
    <div id="filterContainer">
        <fieldset id='filterByMood'>
        <legend>Filter Entries by Mood</legend>
            <div id='radioButtons'>
                <input type='radio' name='radio' value='Zen'>
                <label for='radio'>Zen</label>
                <input type='radio' name='radio' value='Calm'>
                <label for='radio'>Calm</label>
                <input type='radio' name='radio' value='Happy'>
                <label for='radio'>Happy</label>
            </div>
        </fieldset>  
    </div>
`

export default createJournalForm