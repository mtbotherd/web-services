// app
var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'This is a basic message in vue.js.'
    }
})

// app 2
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'This is using the TITLE attribute.'
    }
})

// app 3
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

// app 4
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
})

// app 5
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Click the button to reverse the this text.'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// app 6
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Two-way biding with v-model'
    }
})

// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: 'Vetables'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever else humans are supposed to eat'
            }
        ]
    }
})