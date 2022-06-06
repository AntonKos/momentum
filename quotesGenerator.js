let apiQuotes = []

const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("change-quote")

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    quoteText.textContent = quote.text
    if (quote.author) {
        authorText.textContent = quote.author
    } else {
        authorText.textContent = "Unknown"
    }
    if (quote.text.length > 120) {
        quoteText.classList.add("long-quote")
    } else {
        quoteText.classList.remove("long-quote")
    }
}

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {

    }
}
getQuotes()

newQuoteBtn.addEventListener("click", newQuote)