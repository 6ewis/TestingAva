#Buy Chocolates

Basic useful feature list:

 * SSCT is a single-page application.
 * It works on mobile and desktop (between 768px wide and 1200px).
 * It display an inventory, prices, and have the ability to add chocolates to the cart.
 * Each item has the chocolate type, description, price, and an Add to Cart button.
 * Clicking Add to Cart multiple times will increase the count of that item in the cart.
 * It has a button to view cart.
 * The cart is a modal overlayed on the inventory page.
 * The cart shows the user's total.
 * If the cart is empty, it will show the message "There are no items in your cart".
 * Each item in the cart should have a remove button and a quantity count.
 * The cart has a Clear button. It clears the users cart, and close the modal.
 * The cart has a Close button. It should close the modal, but not clear the cart.


Props to the code editor Vim, from which none of this would have been possible

## Setup

1. Install [NodeJS](nodejs.org)
2. Run `npm install && npm start`
3. Run tests with `npm test -- --watch`

### Three rules for the project structure
 * Rule #1: Organize by feature ; In this case it's overkill but it's very useful on larger apps
 * Rule #2: Create strict module boundaries
 * Rule #3: Avoid circular dependencies

### Rules I follow for Testing
 * Minimal component tests: verify that the component actually renders.
 * Avoid testing implementation details.
 * The need to test logic inside a component might signal the need for refactoring.
 * Test important callbacks and other props.
 * Fully test reducers as they are core functions.
 * Fully test Action Creators.
 * React-Redux: focus on selectors when complex logic is involved as opposed to connected components.
 * Use Eslint, PropTypes to add value.

### Core Libraries used to make this:

 * [Redux](http://redux.js.org/) for a predictable state container
 * [Ramda](https://github.com/ramda/ramda) for the awesome functional utility-belt
 * [Ava](https://github.com/avajs/ava) for the ability to run test concurrently 
 * [Enzyme](http://airbnb.io/enzyme/index.html) for testing React components with ease
