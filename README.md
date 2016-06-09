## Charts

This project is an intentional effort in getting to know how MVC works, RequireJS as module loader, D3.js for graphic generation and several chained API connections.

Online version: http://davidlampon.github.io/charts/prod/index.html

![Image of Charts](https://raw.githubusercontent.com/davidlampon/charts/master/img/charts.png)

###Setup, installation and deploy:
Download repo:
```
git clone git@github.com:davidlampon/charts.git
```

Install dependencies:
```
npm install
```

Launch application:
```
npm start
```

###How it works
- On page load a loading icon is presented while the data is retrieved
- A request is sent to Flickr to retrieve the last 100 more visited pictures  
- An process is triggered to get the first 5 with geolocation information (additional ajax requests)
- The slick gallery is built out of these pictures
- The first image is located in the map to the right with some Google Maps API methods (a marker is set)
- Below the image, information about the author and the location is presented
- The graph to the right shows the total population of the country in which the picture was taken along with the percentage by gender and, inside the donut, an area graph with the population by age (another ajax request)
- When all data for the first picture is set on the viewthe loading icon fades out 
- If carrousel arrows are clicked current marker is deleted, next image is presented with a slide in effect and all the process is triggered again
- When last picture is reached, firs one is presented again

###Presentation

This exercise has been developed with Atom on Chrome and the result has been tested on Firefox and Internet Explorer 11 in an approximate time of 12-14 hours. 

Time used (approximate times)

- Planning: 1.5h (offline)
- Project setup with Yeoman generator: 1h
- RequireJS dependency setup: 1.5h
- D3 charts implementation: 3h
- Design implementation (html & css): 2h
- Validation, testing and refactoring: 1.5h
- Documentation and repository setup: 1.5h

Total invested time: 12-14 hours

###Personal handycaps

- No previous knowledge of D3.JS or RequireJS (only WebPack and SystemJS)
- Very low exposure to Jasmine and TDD
- Low knwoledge of MVC best practices and structure in JS

###Development process

- I faced the option of developing raw code or using a Yeoman generator for a Frontend application. As I'm used to the gulp tasks, sass compilation and browser auto reload I preferred this approach although I knew it would be more work to setup. 
- Folder structure is the generally accepted although the distribution folder is not present on the repository.
- Yeoman generator sets up the html5 boilerplate and I've tried to present the code in the more logical, clear and readable way. 
- BEM naming conventions have been used to make the reading of the style sheet straightforward.
- The view loads an html chunk as a template that is hidden by a class that we remove, customize with the data model from API calls and insert in the base container. 
- D3.js and Slick as dependencies with RequireJS
- No additional libraries or frameworks have been used although it was taken in account handlebars / moustache.

###Missing:
- Javascript config object to store all hardcoded classes and reuse them with variables.
- Sass variables to reuse colors instead of having them hardcoded.
- Modernizr has been included with the intention of presenting an error page in case JS was disabled.
- Different breakpoint layouts were initially planned to be implemented to fix the layout position of the three charts that breaks below 1200px to line them up appropriately.
- HTML5 semantic html. Developed exercised is basically html4 with tags. Some improvements could be made with template, figure and figcaption tags.
- CSS concatenation and minifcation and JS concatenation and uglyfication to reduce size and http requests on load (some gulp task error).

###Flaws

- Project: the gulp taks that is generating the distribution build is not copying the JS files. 
- Javascript: some Eslint errors mainly because syntax and spacing and the module bundling of RequireJS.
- W3C validation not checked.
