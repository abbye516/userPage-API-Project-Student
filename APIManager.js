//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section

class APIManager {
    constructor(renderPage) {
        this.renderPage = renderPage

    }
    getUsers() {
        $.ajax({
            method: "GET",
            url: 'https://randomuser.me/api/1.2/?results=7',
            dataType: 'json',
            success: (data) => {
                let randomUser = data.results[0]
                let randomFriends = data.results.splice(1)
                console.log(randomUser)
                console.log(randomFriends)
                this.renderPage.renderUsers(randomUser)
                this.renderPage.renderFriends(randomFriends)
            }
        });
    }
    getQuote() {
        $.ajax({
            method: "GET",
            url: 'https://talaikis.com/api/quotes/random/',
            dataType: 'json',
            success: (data) => {
                this.renderPage.renderQuote(data)
            }
        });
    }
    getPokemon() {

        let randomNum = Math.floor(Math.random() * 150) + 1
        $.ajax({
            method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${randomNum}/`,
            success: (data) => {

                this.renderPage.renderPokemon(data)
            }
        });
    }
    getMeat() {
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1',
            dataType: 'json',
            success: (data) => {
                console.log(data)
                this.renderPage.renderMeat(data)

            }
        });
    }
    generateNewPage() {
        this.getUsers();
        this.getQuote();
        this.getPokemon();
        this.getMeat()
    }
}

