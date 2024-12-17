export default {
    // export default makes our export available to the rest of the program
    getRandomWYR() {
        // returns a Promise that fetch collects
        // we need to fetch json data and convert that response into data our program can read
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}

