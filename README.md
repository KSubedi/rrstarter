#RRStarter
**RRStarter**, short for React Redux Starter is a starter kit to get prototypes started using the following technologies immediately:

 1. ReactJS
 2. Redux
 3. BootStrap
 4. React-Router
 5. Babel (ES6)
 6. jQuery
 7. SASS
 8. Axios HTTP Client

**RRStarter** is using WebPack for loading modules.

#Getting Started
Getting started is really easy,  simply clone the repository and you are good to go:

    git clone https://github.com/KSubedi/RRStarter.git
    cd RRStarter
    npm install

The initial `npm install` might take some time since there are a lot of dependencies. All the source files are located in the `src` directory and the built files will be outputted to the `public` directory. You can oviously change those from the `webpack.config.js` file.

You can then somehow server the files in the `public` folder. The easiest way to do this on a computer with `python` installed is to:

    cd public
    python -m SimpleHTTPServer

Then you can launch your web browser at `http://localhost:8000` and you will be able to see the application.