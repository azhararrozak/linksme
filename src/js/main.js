
function getQuote() {

    let quoteElement = document.getElementById('profile');

    fetch('https://api.adviceslip.com/advice')
        .then(res => {
            return res.json();
        })
        .then(data => {

            const quote = `<p class="quote">" ${data.slip.advice}"</p>`
            
            quoteElement.insertAdjacentHTML('beforeend', quote);

        })
        .catch(err => console.log(err));
}