# Turtle - Food...Fast App - Client

## About this project

[Pivotal Tracker Project link](https://www.pivotaltracker.com/n/projects/2447118) 

It is a single page web application allowing the user to veiw a restaurant menu and add food to their cart.<br>
This is the client side app with the backend API created in Ruby on Rails in a separate [repo](https://github.com/CraftAcademy/slowfood-api-team-1-april-2020).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project also uses [Semantic UI for React](https://react.semantic-ui.com/) for styling.

The application's features are tested using [Cypress](https://www.cypress.io/).<br>

### Authors
This project was a collaboration between [Pauline Barnades](https://github.com/PaulineBA), [Erik Björn](https://github.com/erikbjoern), [Jenny Scherr](https://github.com/jysmys) and [Steve Watson](https://github.com/designerofthing).

## Dependencies
To run locally you will need to install the packages in the package.json using a package manager for JavaScript.<br>
On top of the packages from the bootstrap we are also using:
- Cypress
- Enzyme
- Semantic-ui-react
- Semantic-ui-css
- Axios
- Start-server-and-test


## Deployment
### Online
[https://turtlefoodfast.netlify.app/](https://turtlefoodfast.netlify.app/)
### Instructions for local deployment
To deploy locally, clone the repository and install packages using your package manager, then run:
#### `yarn start`
The site is connected to an API built by the same team. To run the API locally as well, see [API repo](https://github.com/CraftAcademy/slowfood-api-team-1-april-2020) for corresponding instructions.

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Acknowledgements:<br>
Built with the guidance of the Craft Academy documentation, Reactjs.org, react.semantic-ui.com, Stackoverflow and turtles everywhere. 

## Improvements
    - More user management functions (remove products from cart again)
    - Register (to finalize order and checkout)
    - Update account, etc
    - OAuth login (Facebook, Twitter)
    - Categories for menu.
    - Payment gateway
    - Restaurant owner login
    - Restaurant owner site management functions

## License
This app is open source software [licensed as MIT](https://mit-license.org/).
