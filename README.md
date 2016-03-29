# marfeel-charts
Marfeel Javascript Test (JS / Frontend Development)

* [Presentation](#presentation)
* [Time used handycaps](#time_used)
* [Personal handycaps](#personal_handycaps)
* [Considerations](#considerations)
* [Development process](#development_proces)
* [Taken in account but not implemented](#account)
* [Flaws](#flaws)
* [Not required but impressive](#impressive)

### <a name="presentation"></a>Presentation

This exercise has been developed with Atom on Chrome and the result has been tested on Firefox and Internet Explorer 11. This exercise has been developed in an approximate time of 12-14 hours. Although the recommended time to do it was stated in 8 hours, many factors have increased the development time.

### <a name="time_used"></a>Time used (approximate times)
* Understanding of the exercise and planning: 1.5h (offline)
* Project setup with Yeoman generator: 1h
* RequireJS dependency setup: 1.5h (no previous experience)
* D3 charts implementation: 3h (no previous experience)
* Design implementation (html & css): 2h
* Validation, testing and refactoring: 1.5h
* Documentation and repository setup: 1.5h

Total invested time: 12-14 hours

### <a name="personal_handycaps"></a>Personal handycaps
* No previous knowledge of D3.JS or RequireJS (only WebPack and SystemJS)
* Very low exposure to Jasmine and TDD

### <a name="considerations"></a>Considerations
* Layout and spacing has been measured taking a screenshot of the pdf at 100% zoom and measuring in Photoshop with rules and the marquee tool. 
* BEM CSS naming has been used. Three different sass files have been used: reset (to normalize all browsers), base (for the non chart page specifics) and marfeelCharts (for all chart specifics).
* The font of the exercise was not specified and although it doens't match helvetica perfectly this is the chosen font for development (along whith its sans fallbacks).

### <a name="development_proces"></a>Development process

##### Clean, maintainable, easy-to-read and unit tested code - WILL BE A MUST 

Unit testing has been implemented to show that the Jasmine workflow is known and the setup of the tests is correct but the project itself has not been developed in a TDD way as I have very low exposure to it and trying to do so would have slowed the development process.

##### Good architectural practices 

I faced the option of developing raw code or using a Yeoman generator for a Frontend application. As I'm used to the gulp tasks, sass compilation and browser auto reload I preferred this approach although I knew it would be more work to setup. Folder structure is the generally accepted although the distribution folder is not present on the repository. 

##### Clean HTML and CSS markup 

Yeoman generator sets up the html5 boilerplate and I've tried to present the code in the more logical, clear and readable way. BEM naming conventions have been used to make the reading of the stylesheet straight forward. For the € units an after css element has been used.

##### Produce a reusable component (View) connected to 3 different data models. 

The view loads a html chunk as a template that is hidden by a class that we remove, customise with the data model values and insert in the base container in the html. It displays properly the three different data objects styling each one of them thanks to the additional classes added to each one of them.

##### Produce a reliable and unit tested code (we recommend Jasmine). 

Used but not in depth. I didn't with a interesting way of testing any of the d3js related functions. I just tried my best to come with useful unit tests because as I said unfortunately I have very low exposure to TDD.

##### There’s a clear MVC separation of concerns. In order to do that, you will need a dependency management tool (we recommend you to use RequireJS). 

Used on the controller to introduce as dependencies D3js, the data model and the view. Model is the data object from which we get the representation values and View all the functions that interact with the final html as input or output. The controller acts and communicates between them.

##### Pixel accuracy reproducing designs 

As far as I can tell distances are exactly as the ones in the delivered exercise presentation.

##### Good use of libraries 

No additional libraries have been used although it was taken in account handlebars / moustache.

##### Good use of pure Javascript language. 

Done.

##### We encourage the usage of graphic library. Eg: D3JS library 

Used D3.js as a dependency of the controller with RequireJS (no previous experience)

##### Don’t use external frameworks like jQuery, AngularJS or React JS. 

None used. 

##### Avoid any backend development / dependency. Create a mocked communication with a fake server. 

The mocked communication was not implemented at all. I just created a JS file as the data model to be included as dependency for the controller with RequireJS. 

### <a name="account"></a>Taken in account but not implemented
* Javascript config object to store all hardcoded classes and reuse them with variables.
* Sass variables to reuse colors instead of having them hardcoded.
* Modernizr has been included with the intention of presenting an error page in case JS was disabled.
* Different breakpoint layouts were initially planned to be implemented to fix the layout position of the three charts that breaks below 1200px to line them up appropriately. 
* HTML5 semantic html. Developed exercised is basically html4 with <svg> tags. Some improvements could be made with template, figure and figcaption tags. 
* CSS concatenation and minifcation and JS concatenation and uglyfication to reduce size and http requests on load (some gulp task error).
* Three situations were to be presented: inmediate load of the data (from the JSOn object), delayed load of the data to mimic the ajax request with a time out showing a spinner while loading and a final case with an error of communication or data corruption of the ajax request.

### <a name="flaws"></a>Flaws
* Project: the gulp taks that is generating the distribution build is not copying the JS files. No time to find the problem, out of the scope of the exercise.
* Visual: Top line of are graph inside the chart has no different color than the fill. Didn't find a way to do so for area graphs, maybe with a vertical line graphs there would be options to do it.
* Javascript: some Eslint errors mainly because syntax and spacing and the module bundling of RequireJS.
* W3C validation not checked.

### <a name="impressive"></a>Not required, but impressive

A carrousel built form scratch would take around 3-4 hours of development which is completely out of the time window suggested for the development of the exercise. 
