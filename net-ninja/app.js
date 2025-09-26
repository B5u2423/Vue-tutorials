// Vue app
const app = Vue.createApp({
    // data, functions
    // template: "<h1>This is the Template</h1>" // got injected into #app
    // normally template property is not used, instead we add the template in the HTML file

    data() { // function that returns an object
        return {
            title: "Random Title",
            author: "Author Name",
            age: 1,
            x: 0,
            y: 0,
            books: [
                { title: "Book 1", author: "Author 1", img: "assets/1.png" },
                { title: "Book 2", author: "Author 2", img: "assets/2.png" },
                { title: "Book 3", author: "Author 3", img: "assets/3.png" },
                { title: "Book 4", author: "Author 4", img: "assets/4.png" },
                { title: "Book 5", author: "Author 5", img: "assets/5.png" }
            ],
            url: "https://example.com"
        }
        // data can not be used outside of Vue app
    },

    // update data, functions that can be used in the template
    methods: { // properties that are functions
        decreaseAge() {
            this.age--
        },
        handleEvent(e, data) {
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            console.log(this.x, this.y)
        }
    }
})

// mount the app to a DOM element (element of id "app")
app.mount("#app")