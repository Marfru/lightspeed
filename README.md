# Lightspeed HQ - Technical Assignment

### Description of the assignment:

>Build a shopping cart that has the following functionality using this dummy API http://next.json-generator.com/api/json/get/4kiDK7gxZ:

1) Show a grid of items with each item has price, thumbnail & "add to cart" button.
2) Clicking one item should show more info about the item (description, price, remaining stock & add to cart button).
3) When you click the add to cart button the item should be added to the cart and the stock number should be updated in the detail view of the item.
4) The cart should have a checkout button, when clicked show a successful message and clear the cart.
5) Design is left for you, it's not a design task so nothing fancy, but of course responsive. Functionality is more important.

>Please provide a `README` file describing your rational, tools & ideas you used and why. Use git (github, gitlab or bitbucket repo) if possible, but if you can't provide a git repo somewhere make sure you send a zip file with the `.git` folder included.

### Run Project

```sh
$ git clone git@github.com:Marfru/lightspeed.git
$ cd lightspeed
$ npm i
$ npm start
```

You need to have an .env in the root since I have used a custom-react-scripts package to support decorators and scss files with ease. The env files enable **decorators** (mobx) and **scss/sass** support. It should be included in the repo, but:

#### .env
```sh
REACT_APP_DECORATORS=true
REACT_APP_SASS_MODULES=true
REACT_APP_SASS=true
```

### If using VSCode

You will have some experimental decorators warnings. Only warnings, it still compiles with no problem, but I know it can be annoying. Just create a **tsconfig.json** file in the root of the directory with this content:

```sh
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```


### Packages used

| Package | Url |
| ------ | ------ |
| mobx | https://www.npmjs.com/package/mobx |
| mobx-react | https://www.npmjs.com/package/mobx-react |
| axios | https://www.npmjs.com/package/axios |
| react-router-dom | https://www.npmjs.com/package/react-router-dom |
| Custom-React-Scripts | https://www.npmjs.com/package/custom-react-scripts |

### Approach

I used mobx and its decorators to build this small shopping cart with basic functionality. I decided to use mobx since I have used it in the past, and for a fast assignment, it was my preferred choice. In my personal opinion, it's also a bit more readable.

Actions like adding products to the cart or calculating the total amount of the cart that are being occurred in this app, are located in **src/stores/CartStore.js** A problem I encountered, was that the json data from **{product.price}**, had a ',' when it was larger than $999. Decided to replace the comma with an empty string, with a parseFloat included in the product price.

Fetching API using axios is done in **src/stores/ProductStore.js**

In the components folder, we have a common folder which has a re-usable **Modal.js** and **Success.js** implemented in other components.

In the styles folder, we have basic **.scss** files with variables, media queries (responsiveness, a basic one) and other styling values.

In **Home.js** I render:
- **Cart.js** which renders the products added to your cart, and the total sum of it. Also, removable products.
- **ProductList.js** which renders the fetched data from the API. And yes, I used tables.
- **ItemsCount.js** just renders the quantity of items in the shopping cart.

Rest of components:

- **Cart.js** => Renders the content of the shopping cart which includes: Added products, Total Amount to be paid, and a checkout button which clears the shopping cart's content.
- **CartItem.js** => Single products added to the shopping cart that are also removable. This is imported in **cart.js**.
- **MoreInfo.js** => Renders the content of the modal when the users clicks on the "More Info" button on the main overview of the products (grid).
- **ProductList.js** => Renders the grid of products.
- **ProductSingle.js** => Rendering individual products where fetching data is being done by **ProductStore.js**.

### Design

Nothing much to add here. Used tables with light colours, and Roboto font just to make it look a bit more smooth.

### Responsiveness

The media queries variables (located in **components/styles/_vars.scss**) are being applied to the table and main wrapper only. Which still makes it responsive, but it can be worked on a lot.

### Encountered Problems

- As mentioned before, rendering the price and calculating the total wasn't working as expected. Until I found the solution to replace the ',' to an empty string.
- Decorators were not being supported. I used Custom React Scripts (https://www.npmjs.com/package/custom-react-scripts) with the custom **.env** file mentioned above.
- Didn't have time to render the modal component **Success.js** on the OnClick function located on the Checkout Button in the shopping cart. But I know how to do it. I just added an alert, and when accepted, it clears the shopping cart.
- I'm more comfortable using Styled Components (or Emotion), but a basic design using SASS was faster.
- Folders should be more organized.


