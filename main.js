// Create instances of your classes here

let renderPage = new Renderer


// Render your page and create an on-click to generate a new user here

const x = new APIManager (renderPage)
x.getUsers()
x.getQuote()
x.getPokemon()
x.getMeat()


$("#gen-page").on("click", function(){
    x.generateNewPage()
    // $(".container").empty()
})