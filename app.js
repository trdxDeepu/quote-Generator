let apiQuotes  =[ ] ;

function newQuote() {
    
}

async function getQuotes() {
    
    const apiUrl = 'https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
  }

getQuotes();

