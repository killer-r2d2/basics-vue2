### basics vue2

#### a training to learn vue
https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance

#### Roger Killer

#### Date: 14.01.2021

##### Notice:
###### The Vue Instance:
- Vue instance is the heart of the application
- {{}} expression to display the data
- vue is reactive
###### attribute binding:
- data can be bound to HTML attributes
- Inside the attribute's quotes, we reference the data we're binding to.
- Syntax: v-bind:attribute or :attribute
###### conditional rendering:
There are Vue directives to conditionally render elements:
v-if, v-else, v-else-if, v-show
###### list rendering:
- The v-for directive allows us to iterate over an array to display data.
- We use an alias for the element in the array being iterated on, and specify the name of the array we are looping through. Ex: v-for="item in items"
- We can loop over an array of objects and use dot notation to display values from the objects.
- When using v-for it is recommended to give each rendered element its own unique key.
