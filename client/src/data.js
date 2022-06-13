const questions = [
    {
        id: 1,
        title: ' What is JSX?',
        info:
            'JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance.',
    },
    {
        id: 2,
        title: 'Why can’t browsers read JSX?',
        info:
            'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.',
    },
    {
        id: 3,
        title: '“In React, everything is a component.” Explain.',
        info:
            'Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.',
    },
    {
        id: 4,
        title: 'What is Props?',
        info:
            'Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.',
    },
    {
        id: 5,
        title: 'Explain Flux.',
        info:
            'Flux is an architectural pattern which enforces the uni-directional data flow. It controls derived data and enables communication between multiple components using a central Store which has authority for all data. ',
    },
]
export default questions