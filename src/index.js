//custom Engine for creating DOM document through Vanilla JavaScript, by passing object constructing html site.

class Tag {
    constructor(parent, child, attribute, text) {
        this.parent = parent;
        this.child = child;
        this.attribute = attribute;
        this.text = text;
    }
}

Tag.prototype.createTagElement = function() {
    let parent = this.parent;
    let child = this.child;
    let attribute = this.attribute;
    let text = this.text;

    child = document.createElement(child);
    parent.appendChild(child);
    child.innerHTML = text;

    for (let key in attribute) {
        if (attribute.hasOwnProperty(key)) {
            let value = attribute[key]; 

            child.setAttribute(key, value);
            console.log( {key}, value );
        }
    }
     
    return child;
}

// fetch('https://swapi.co/api/starships/')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })

const body = document.querySelector("body");
const attribute = {"class": "test", "style": "background-color: red"};


//Site Banner
const Banner = new Tag(
    body, 
    "div", 
    { "class": "banner" }, 
    "Banner"
); 
const banner = Banner.createTagElement();

//App Container
const App = new Tag(
    body, 
    "div", 
    { "class": "app", "style": "background-color: darkgray" }, 
    "Hello World!"
);
const app = App.createTagElement();

    //Search Input Container
    const Search_Container = new Tag(
        app,
        "div",
        { "class": "search-container" },
        "Search"
    );
    const search_container = Search_Container.createTagElement();

        //Search Input
        const Search_Input = new Tag(
            search_container,
            "input",
            { "class": "search-input" },
        );
        const search_input = Search_Input.createTagElement();

    const Gallery_Container = new Tag(
        app,
        "div",
        { "class": "search-container" },
        "Gallery Container"
    );
    const gallery_container = Gallery_Container.createTagElement();



console.log(app);
console.log(App);
