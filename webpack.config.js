const path = require("path");

module.exports = 
{
    mode: "development",
    devtool: "eval-source-map",
    entry : 
    {
        index : "./src/index.js",
        login: "./src/loginScreen.js",
        signUp: "./src/signUpScreen.js",
        landingPage: "./src/landingPage.js",
        marketHouse: "./src/marketHouse.js",
        calendar: "./src/calendar.js",
        recipes: "./src/recipes.js"
    },  
    output: 
    {
        path: path.resolve(__dirname, "dist"),
    }
}