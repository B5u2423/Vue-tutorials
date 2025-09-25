// Vue app
const app = Vue.createApp({
    // data, functions
    // template: "<h1>This is the Template</h1>" // got injected into #app
    // normally template property is not used, instead we add the template in the HTML file

    data() { // function that returns an object
        return {
            title: "Random Title",
            author: "Author Name",
            age: 20
        }
        // data can not be used outside of Vue app
    },

    // update data, functions that can be used in the template
    methods: { // properties that are functions
        decreaseAge() {
            this.age--
        }
    }
})

// mount the app to a DOM element (element of id "app")
app.mount("#app")