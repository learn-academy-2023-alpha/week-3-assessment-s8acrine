# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:
JSX Stands for javascript extensible markup. It can be seen as the joining of javascript and HTML. One syntax difference is that the HTML class attribute must be changed to className, as class is already reserved by Javascript. An important thing to note as well, if you are outputting HTML and wish to include ANY javascript functionality, it needs to be wrapped in curly braces ({}).
Researched answer: As webpage content became more and more dependant on user interaction, it became prudent to no longer seperate html and javascript into different domains. JSX (JavaScript XML (extensible markup language)) provided the solution. By expanding the JavaScript language to include HTML, it became possible to manage webpage content through javascript components, dynamically returning HTML based on javascript logic. Though JSX allows fairly free transition from Javascript and HTML, there are some syntactical changes. For one, the HTML class attribute uses a reserved name in javascript, so it is replaced with className.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager (it stands for yet another resource negotiator) to manage the acquisition and updating of dependencies for various projects. Using the yarn command will create or update the package.json file and the yarn.lock file in your directory.

Researched answer: yarn is a package manager for code bases. It not only manages the acquisition of needed code, but also manages a seperate manifest which keeps track of what version of code was downloaded. Yarn allows for the distribution of code bases with version checking and tracking, to simplify development of code by keeping everyone on the same page in terms of their code libraries.

3. What is a React component?

Your answer: A react component is a self-contained, re-usable package of code for use in React applications. It allows for the breakdown of large webpages with many different sections into discrete blocks of code that can be used multiple times, can display data dynamically, and can be used to improve page performance by only updating when changes are needed, versus requiring an entire page reload.

Researched answer:

React uses components to break a webpage into various chunks of data. Components have a behavior similar to functions in javascript, in that they are re-usable chunks of code that take in data and output some other data in a self contained block. This allows developers to work with components discretely, and focus on the functionality of each component on and individual basis, instead of needed to work with the webpage as a whole.

4. What is the difference between state values and props in React?

Your answer: In react, it is often necessary to store and transfer data related to user interaction. For this management of data, we use states and props. States are used to store data (specifically the state of a componenet) during a user's internet session. Props (short for properties) are a method of passing data or methods from a parent component to a child component.

Researched answer:

React uses two objects to manage data within a user's browsing session: states and props. Both state and props are javascript objects that contain data. The primary difference is that props are used to transfer information from a parent component to a child component, state is managed within the component it resides in. For example, a simple counter can be created using state to manage the current value. Using the set<statename> method, the counter state value can be changed. This occurs through a function in the component the state resides in. If we wanted to display the value of the counter in a different component, we would need to pass that data into the component call using a prop.

5. What is the DOM?

Your answer: DOM is the document object model. This is what internet browsers use to display the page. It includes things like mouse position, when someone clicks, etc. React uses the DOM model to dynamically update only those items that are requiring a change, versus reloading the entire page when an update needs to be made.

Researched answer:
DOM is an acronym that stands for Document Object Model. It is a method of representing the layout of a webpage. Through HTML alone, a webpage can still be displayed, but only through the DOM can the webpage be intereacted with through javascript. The DOM represents the page in a tree structure, with the head and body tags constituting the first main 'branches'. From there, each tag creates a new branch, while the inner HTML constitutes the 'node'.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: A `<div>` tag creates a 'container' that stretches across the document. A `<span>` tag is used to create a similar 'container' inside a parent element. For example, if you were writing a paragraph inside a <p> tag, and wanted to edit a portion of the text but not the rest, you could use a `<span>` tag to wrap the desired text, then make whatever edits you want as attributes in the span tag.

Researched answer:
Both div and span are generic 'containers' that are used to apply attributes to sections of a webpage, the primary difference is how they are used. A div tag is used to create discrete 'blocks' of content, which spans the length of a page. A group of paragraphs, a menu bar, or a group of photos could all be placed into seperate divs to create blocks of content that can be arranged or styled as needed. A span tag is also used to create a 'container', this container lives inside a parent tag, and does not create a new 'block' but allows for adding styling or other various elements to a piece of content withing a tag.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:
   Object-oriented programming is a method of programming that focuses on objects as it's building blocks rather than functions. By organizing the data that needs to be manipulated into classes and objects, each piece of data is assigned into a class, which determines what types of data it holds, what methods are available to be used on it, etc. This creates discrete blocks of data that can be managed individually, making troubleshooting easier as if the issue is in a particular object of class, you can go directly to it to find the problem, versus in Functional Programming, changing the function to fix one bug may create many others down the road.

2. Ruby:
   "Ruby is a dynamic, open source language with a focus on simplicity and productivity", taken straight from the Ruby website. Ruby is an open source language, which means it is completley free to use and the source code is directly able to be modified. Ruby is maintained by many developers, but it's founder was Yukihiro Matsumoto, who wanted to create a language that was 'natural' to use and very powerful. Ruby is an object oriented language, in fact, it is often said in Ruby that 'everything is an object'; even primitive data types such as numbers are objects. This means that methods in Ruby can be applied across all of Ruby, instead of only in specific circumstances or classes. Ruby also allows for teh modification of it's built in classes, which gives developers extra flexibility to create code that works for them and their project.

3. Implicit return:
   In Ruby (and other languages that have this feature), an implicit return is a 'default' of sorts when creataing functions or methods. If you build out a method in Ruby, by default it will return the last line of your method before `end`. You can add your own return, and even place it on a line other than the last line, but by default, Ruby will alwasy retrun the last line of your method. This allows for short, clean, code, but can also lead to pitfalls if you aren't perfectly sure of what your last line is actually returning.

4. Ruby blocks:
   Ruby blocks are anonymous functions that are passed in as arguments for mthods that require them. They are similar to the way we would use higher order function in Javscript (passing in a function into a method). Blocks are built in Ruby syntactically with eith {curly braces if on one line} or with
   do
   code here
   end
   if on multiple lines.

5. Ruby hashes:
   Ruby hashes are similar to objects in javascript, which are both like arrays. While an array uses a numeric number for it's index, and is accessed through it's index, a hash can uses anything as it's 'key' which is paired with a value, similar to an object in javascript.
