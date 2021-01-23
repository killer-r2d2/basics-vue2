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
###### event handling:
The v-on directive is used to allow elements to listen for events
The shorthand for v-on is @
You can specify the type of event to listen for:
click
mouseover
any other DOM event
The v-on directive can trigger a method
Triggered methods can take in arguments
this refers to the current Vue instance’s data as well as other methods declared inside the instance
###### Class & Style Binding:
Data can be bound to an element’s style attribute
Data can be bound to an element’s class
We can use expressions inside an element’s class binding to evaluate whether a class should appear or not
###### Computed Properties:
Components are blocks of code, grouped together within a custom element
Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior
Data on a component must be a function
Props are used to pass data from parent to child
We can specify requirements for the props a component is receiving
Props are fed into a component through a custom attribute
Props can be dynamically bound to the parent’s data
Vue dev tools provide helpful insight about your components
####### Components:
Components are blocks of code, grouped together within a custom element
Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior
Data on a component must be a function
Props are used to pass data from parent to child
We can specify requirements for the props a component is receiving
Props are fed into a component through a custom attribute
Props can be dynamically bound to the parent’s data
Vue dev tools provide helpful insight about your components