//custom Engine for creating DOM document through Vanilla JavaScript, by passing object constructing html site.

class Tag {
    constructor(parent, child, attribute, text) {
        this.parent = parent;
        this.child = child;
        this.attribute = attribute;
        this.text = text;
    }

    // get tag() {
    //     return this.createTagElement();
    // }

    // createTagElement() {
    //     let parent = this.parent;
    //     let child = this.child;
    //     let attribute = this.attribute;

    //     child = document.createElement(child);
    //     parent.appendChild(child);

    //     for (let key in attribute) {
    //         if (attribute.hasOwnProperty(key)) {
    //             let value = attribute[key];
     
     
    //             child.setAttribute(key, value);
    //             console.log( {key}, value );
    //          }
    //     }
     
    //     return child;
    // }
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

const body = document.querySelector("body");
const attribute = {"class": "test", "style": "background-color: red"};

const app = new Tag(
    body, 
    "div", 
    { "class": "app", "style": "background-color: darkgray" }, 
    "Hello World!"
);
app.createTagElement();



console.log(app);

// const attributes2 = {
//     div: {
//         div: 'div',
//         atr: "square",
//     },
//     button: {
//         div: 'div',
//         atr: "tirangle",
//     },
//     input: {
//         div: 'div',
//         atr: "line",
//     },
// }

// const body = document.querySelector("body");
// const attributes = {"class": "test", "style": "background-color: red"};

// const createTagEl = (parent, child, attributes) => {
//    child = document.createElement(child);
//    parent.appendChild(child);

// //    for (let i = 0; i < atrArrayObj.length; i++) {
// //        child.setAttribute(atrArrayObj[i][0], atrArrayObj[i][1]);
// //    };

//    for (let key in attributes) {
//        if (attributes.hasOwnProperty(key)) {
//            let value = attributes[key];


//            child.setAttribute(key, value);
//            console.log( {key}, value );
//         }
//    }

//    return child;
// };

// createTagEl(body, "div", attributes2);

// for (let key in attributes2) {
//     console.log(key + " -> " + attributes2[key]);
// }

// (attributes) => {
//     console.log({ attributes });
//     const tagElement = 


//     childrens = document.createElement(childrens);
//     parent.appendChild(childrens);

//     tag = child.map( (child) => {
//         child.setAttribute({atrArrayObj}, )
//     })

// createTagElement(attributes)

// var obj = {a: 1, b: 2, c: {a: 1, b: 2}};
// function walk(obj) {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       var val = obj[key];
//       console.log(val);
//       walk(val);
//     }
//   }
// }
// walk(obj);