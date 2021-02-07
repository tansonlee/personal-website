(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(2),i=a(19),c=a.n(i),o=(a(31),a(9)),r=a(4),l=a(17),m=(a(32),function(){var e=Object(s.useState)({home:!0,projects:!1,resume:!1,contact:!1}),t=Object(l.a)(e,2),a=t[0],i=t[1],c=Object(s.useState)(!1),r=Object(l.a)(c,2),m=r[0],u=r[1],h=function(e){var t={home:!1,projects:!1,resume:!1,contact:!1};t[e]=!0,i(t)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)(o.b,{onClick:function(){return h("home")},className:"link big-link",to:"/",children:"<Tanson Lee />"}),Object(n.jsxs)("div",{className:m?"hamburger ham-open":"hamburger",onClick:function(){return u(!m)},children:[Object(n.jsx)("div",{className:"line line1"}),Object(n.jsx)("div",{className:"line line2"}),Object(n.jsx)("div",{className:"line line3"})]}),Object(n.jsxs)("div",{className:m?"link-wrapper open":"link-wrapper",children:[Object(n.jsx)(o.b,{onClick:function(){h("home"),u(!1)},className:a.home?"link small-link highlight":"link small-link",to:"/",children:"Home"}),Object(n.jsx)(o.b,{onClick:function(){h("projects"),u(!1)},className:a.projects?"link small-link highlight":"link small-link",to:"/projects",children:"Projects"}),Object(n.jsx)(o.b,{onClick:function(){h("resume"),u(!1)},className:a.resume?"link small-link highlight":"link small-link",to:"/resume",children:"Resume"}),Object(n.jsx)(o.b,{onClick:function(){h("contact"),u(!1)},className:a.contact?"link small-link highlight":"link small-link",to:"/contact",children:"Contact"})]})]})})}),u=(a(38),a(39),a(16)),h=a(0),g=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"name",children:"Tanson Lee."}),Object(n.jsxs)("div",{className:"software-engineer",children:[" ","> Computer Science ",Object(n.jsx)("div",{id:"blinking-cursor"})," "]}),Object(n.jsx)("div",{className:"languages",children:"| Python | JavaScript | C | R | Racket |"}),Object(n.jsxs)("p",{className:"description-text white-border",children:["Code to this website made with React.js here:"," ",Object(n.jsx)("a",{className:"inline-link",href:"https://github.com/tansonlee/personal-website",rel:"noreferrer",target:"_blank",children:"Code"})]}),Object(n.jsx)("div",{className:"media-link-wrapper",children:Object(n.jsxs)(h.b.Provider,{value:{className:"media-icon"},children:[Object(n.jsxs)("a",{rel:"noreferrer",target:"_blank",className:"media-link",href:"https://github.com/tansonlee",children:[Object(n.jsx)(u.a,{}),Object(n.jsx)("p",{className:"icon-description",children:"GitHub"})]}),Object(n.jsxs)("a",{rel:"noreferrer",target:"_blank",className:"media-link",href:"https://linkedin.com/in/tanson-lee",children:[Object(n.jsx)(u.b,{}),Object(n.jsx)("p",{className:"icon-description",children:"LinkedIn"})]})]})})]})},b=a(3),j=(a(40),a(41),function(e){var t=e.company,a=e.date,s=e.role,i=e.description;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"experience-wrapper card-shadow",children:[Object(n.jsxs)("div",{className:"experience-info",children:[Object(n.jsx)("h3",{children:t}),Object(n.jsxs)("div",{className:"date-role",children:[Object(n.jsx)("p",{className:"experience-date",children:a}),Object(n.jsx)("p",{className:"experience-role",children:s})]})]}),Object(n.jsx)("div",{className:"vertical-line"}),Object(n.jsx)("ul",{className:"experience-description",children:i.map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})]})})}),p={company:"Sciex",date:"August 2019",role:"Software and Research Intern",description:["Developed automation software for mass spectrometry data","Reduced analysis time from 1 hour to ~1 minute with >95% accuracy","Used Python Juypter Notebook with Numpy, Pandas, and Matplotlib"]},d={company:"Tutor",date:"March 2019 - Present",role:"Computer Science, Math, Chemistry",description:["Helped clients understand fundamental concepts","Used clear examples to tend to individual learning styles","Improved clients grades by ~9% on average"]},O={company:"Canadian Tire",date:"July - November 2018",role:"Store Clerk",description:["Attended to customer inquiries and requests","Commumicated effectively with both coworkers and customers"]},f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"page-header",children:"My Experience"}),Object(n.jsx)(j,Object(b.a)({},p)),Object(n.jsx)(j,Object(b.a)({},d)),Object(n.jsx)(j,Object(b.a)({},O))]})},x=(a(42),function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"page-header",children:"About Me"}),Object(n.jsx)("p",{className:"self-description card-shadow",children:"I'm a Computer Science student at the University of Waterloo. I built this website as an accessible way to showcase some of my projects."})]})}),k=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("div",{className:"spacing"}),Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"spacing"}),Object(n.jsx)(f,{})]})},y=(a(43),a(44),function(e){var t=e.name,a=e.link,s=e.image,i=(e.category,e.description),c=e.outcomes;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"introduction-project-wrapper card-shadow",children:[Object(n.jsx)("h3",{className:"project-name",children:t}),Object(n.jsx)("a",{rel:"noreferrer",target:"_blank",className:"link-to-project",href:a,children:"Link to Project"}),Object(n.jsx)("img",{className:"project-image",src:s,alt:t}),Object(n.jsx)("p",{className:"learning-outcomes",children:c}),Object(n.jsx)("p",{className:"project-description",children:i})]})})}),w={name:"My Machine Language",link:"https://github.com/tansonlee/machine-language",image:"https://github.com/tansonlee/website-images/blob/main/my-machine-language.png?raw=true",category:"Functional Programming",description:"I designed and implemented a turing-complete machine language in Python using functional programming techinques.",outcomes:"Computer Design | Functional Programming | Modular Design"},v={name:"Sorting Algorithms",link:"https://github.com/tansonlee/sorting-algorithms",image:"https://github.com/tansonlee/sorting-algorithms/raw/main/assets/all.png",category:"Algorithms",description:"An implementation and time complexity analysis of 6 comparison sort algorithms.",outcomes:"Matplotlib | Time Complexity Analysis"},N={name:"Lindenmayer Fractals",link:"https://github.com/tansonlee/l-systems",image:"https://github.com/tansonlee/website-images/blob/main/l-systems.png?raw=true",category:"Algorithms",description:"I rendered over 25 fractals patterns using the Lindenmayer System method.",outcomes:"JSON Data | Fractal Patterns | Algorithms"},A={name:"Sudoku Solver",link:"https://github.com/tansonlee/sudoku-solver",image:"https://github.com/tansonlee/sudoku-solver/raw/master/assets/sudoku-solver-hard.gif",category:"Algorithms",description:"An implementation and visualization of a backtracking algorithm that solves Sudokus.",outcomes:"Backtracking | Object Oriented P."},S={name:"Flocking Simulation",link:"https://github.com/tansonlee/flocking-simulation",image:"https://github.com/tansonlee/flocking-simulation/raw/master/assets/flocking-simulation.gif",category:"Simulations",description:"An implementation and visualization of a bird flocking simulation.",outcomes:"Visualization Tools | Object Oriented P."},P={name:"Binary Search Tree",link:"https://github.com/tansonlee/binary-search-tree",image:"https://github.com/tansonlee/website-images/blob/main/bst.png?raw=true",category:"Abstract Data Types",description:"An implementation of a binary search tree using functional programming techniques.",outcomes:"Functional Programs | First Class Functions"},F={name:"Functional List",link:"https://github.com/tansonlee/functional-list",image:"https://github.com/tansonlee/website-images/blob/main/functional-list.png?raw=true",category:"Functional Programming and Abstract Data Types",description:"Cons cell lists and abstract list functions as they are in functional programming languages like Haskell, Lisp, and Scheme.",outcomes:"Functional Programs | Algorithms"},C={name:"Parametric Art",link:"https://github.com/tansonlee/parametric-art",image:"https://github.com/tansonlee/parametric-art/raw/main/assets/example.gif",category:"",description:"Designs created using pairs of parametric equations",outcomes:"Parametric Equations | Visualization"},D={name:"Collision Simulator",link:"https://github.com/tansonlee/collision-simulator",image:"https://github.com/tansonlee/website-images/blob/main/collision-simulator.gif?raw=true",category:"",description:"Visualizes 1D/2D and elastic/inelastic collisions with an intuitive UI",outcomes:"UI Design | Object Oriented P. | Simulation"},T={name:"Running App",link:"https://github.com/tansonlee/running-app",image:"https://github.com/tansonlee/website-images/blob/main/running-app.jpg?raw=true",category:"",description:"A full stack running app that tracks and stores 4 running metrics.",outcomes:"Full Stack | APIs | Node.js | Express"},M={name:"Minesweeper",link:"https://github.com/tansonlee/mine-sweeper",image:"https://github.com/tansonlee/mine-sweeper/blob/master/assets/gameDark.gif?raw=true",category:"",description:"An online minesweeper game with a light and dark theme.",outcomes:"Object Oriented P. | Recursive Algorithms"},_={name:"Chaos Game Fractals",link:"https://github.com/tansonlee/mine-sweeper",image:"https://github.com/tansonlee/fractals-with-chaos-game/raw/master/assets/region/pi.gif",category:"",description:"Generated over 10 fractal patterns using the chaos game.",outcomes:"Image Processing | Fractal Generation"},R={name:"Particle Flow Field",link:"https://github.com/tansonlee/particle-flow-field",image:"https://github.com/tansonlee/particle-flow-field/raw/master/assets/particle-field.gif",category:"",description:"Simulation of particle paths in a generated field",outcomes:"Perlin Noise | Visualization Techniques"},z={name:"Tic Tac Toe",link:"https://github.com/tansonlee/tic-tac-toe",image:"https://github.com/tansonlee/tic-tac-toe/raw/master/gif/tic-tac-toe.gif",category:"",description:"An online game of Tic Tac Toe",outcomes:"Web Develpoment | Object Oriented P."},I={name:"The Game of Life",link:"https://github.com/tansonlee/game-of-life",image:"https://github.com/tansonlee/game-of-life/raw/main/assets/random.gif",category:"",description:"A simulation of John Conway's Game of Life.",outcomes:"Cellular Automata | Simulations"},q={name:"Random Access Memory",link:"https://github.com/tansonlee/ram",image:"https://github.com/tansonlee/website-images/blob/main/RAM.png?raw=true",category:"",description:"An implementation of a RAM abstract data type.",outcomes:"Data Abstraction | Functional Programs | Modular Design"},L={name:"Sound Wave Simulator",link:"https://github.com/tansonlee/sound-wave-simulator",image:"https://github.com/tansonlee/sound-wave-simulator/raw/master/assets/sonic.gif",category:"",description:"A simulation of subsonic, sonic, and supersonic sound waves.",outcomes:"Algorithms | Visulaization | Simulation"},E={name:"Binary Trie",link:"https://github.com/tansonlee/trie",image:"https://github.com/tansonlee/website-images/blob/main/binary-trie.png?raw=true",category:"",description:"An implementation of a binary trie abstract data type.",outcomes:"Functional Programs | Algorithms"},U={name:"Maze Generator",link:"https://github.com/tansonlee/maze-generator",image:"https://github.com/tansonlee/maze-generator/raw/master/assets/maze-generator.gif",category:"",description:"A visualization of a maze generating algorithm.",outcomes:"Back Tracking | Stacks | Visualization"},G={name:"Abstract Data in RAM",link:"https://github.com/tansonlee/adt-in-ram",image:"https://github.com/tansonlee/website-images/blob/main/adt-in-ram.png?raw=true",category:"",description:"An implementation of data structures in RAM which include the array, stack, and queue.",outcomes:"Data Abstraction | Functional Programs"},V={name:"Marching Squares",link:"https://github.com/tansonlee/marching-squares",image:"https://github.com/tansonlee/marching-squares/raw/master/assets/marching-squares.gif",category:"",description:"A marching squares algorithm visualization",outcomes:"Perlin Noise | Algorithms | Visualization"},H={name:"Hash Table",link:"https://github.com/tansonlee/hash-table",image:"https://github.com/tansonlee/website-images/blob/main/hash-table.png?raw=true",category:"",description:"An implementation of a dynamic hash table data structure",outcomes:"Hash Functions | Hash Collisions"},J={name:"Double Pendulum",link:"https://github.com/tansonlee/double-pendulum",image:"https://github.com/tansonlee/double-pendulum/raw/master/gif/double-pendulum2.gif",category:"",description:"A visualization of a double pendulum system",outcomes:"Algorithms | Visualization Techniques"},B={name:"Pong",link:"https://github.com/tansonlee/pong",image:"https://github.com/tansonlee/pong/raw/master/assets/game.gif",category:"",description:"An online game of 2-player pong",outcomes:"Object Oriented P. | UI Design"},Y={name:"Snake",link:"https://github.com/tansonlee/snake",image:"https://github.com/tansonlee/snake/raw/master/gif/snake2.gif",category:"",description:"An online game of snake.",outcomes:"Game Design"},W={name:"Linear Regression",link:"https://github.com/tansonlee/gradient-decent-linear-regression",image:"https://github.com/tansonlee/gradient-decent-linear-regression/raw/master/assets/gradient-decent-linear-regression.gif",category:"",description:"A linear regression model using gradient descent.",outcomes:"Gradient Descent"},X={name:"Ray Marching",link:"https://github.com/tansonlee/ray-marching",image:"https://github.com/tansonlee/ray-marching/raw/master/assets/both.gif",category:"",description:"A visualization of the ray marching algorithm",outcomes:"Optimization Techniques | Algorithms"},K={name:"Ray Casting",link:"https://github.com/tansonlee/2D-raycasting",image:"https://github.com/tansonlee/2D-raycasting/raw/master/assets/2D-raycasting.gif",category:"",description:"A visualization of the Ray Casting algorithm.",outcomes:"Optimization Techniques | Algorithms"},Q={name:"Barnsley Fern",link:"https://github.com/tansonlee/barnsley-fern",image:"https://github.com/tansonlee/barnsley-fern/raw/master/gif/barnsley-fern.gif",category:"",description:"A visualization of the Barnsley Fern fractal.",outcomes:"Algorithms"};var Z=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"page-header",children:"All Projects!"}),Object(n.jsx)("div",{className:"projects-description-wrapper",children:Object(n.jsxs)("p",{className:"description-text white-border",children:["All projects can be found on my GitHub here:"," ",Object(n.jsx)("a",{rel:"noreferrer",target:"_blank",className:"inline-link",href:"https://github.com/tansonlee",children:"GitHub"})]})}),Object(n.jsx)("div",{className:"projects-project-card-wrapper-wrapper",children:Object(n.jsxs)("div",{className:"projects-project-card-wrapper",children:[Object(n.jsx)(y,Object(b.a)({},S)),Object(n.jsx)(y,Object(b.a)({},A)),Object(n.jsx)(y,Object(b.a)({},_)),Object(n.jsx)(y,Object(b.a)({},w)),Object(n.jsx)(y,Object(b.a)({},v)),Object(n.jsx)(y,Object(b.a)({},N)),Object(n.jsx)(y,Object(b.a)({},V)),Object(n.jsx)(y,Object(b.a)({},B)),Object(n.jsx)(y,Object(b.a)({},D)),Object(n.jsx)(y,Object(b.a)({},P)),Object(n.jsx)(y,Object(b.a)({},G)),Object(n.jsx)(y,Object(b.a)({},W)),Object(n.jsx)(y,Object(b.a)({},M)),Object(n.jsx)(y,Object(b.a)({},U)),Object(n.jsx)(y,Object(b.a)({},H)),Object(n.jsx)(y,Object(b.a)({},q)),Object(n.jsx)(y,Object(b.a)({},T)),Object(n.jsx)(y,Object(b.a)({},C)),Object(n.jsx)(y,Object(b.a)({},I)),Object(n.jsx)(y,Object(b.a)({},K)),Object(n.jsx)(y,Object(b.a)({},X)),Object(n.jsx)(y,Object(b.a)({},E)),Object(n.jsx)(y,Object(b.a)({},F)),Object(n.jsx)(y,Object(b.a)({},L)),Object(n.jsx)(y,Object(b.a)({},Y)),Object(n.jsx)(y,Object(b.a)({},z)),Object(n.jsx)(y,Object(b.a)({},Q)),Object(n.jsx)(y,Object(b.a)({},J)),Object(n.jsx)(y,Object(b.a)({},R))]})})]})},$=(a(45),a(46),a.p+"static/media/resume.76e3be89.png"),ee=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"resume-wrapper",children:Object(n.jsx)("img",{className:"resume-img",src:$,alt:"resume"})})})},te=a.p+"static/media/resume.6296c6ec.pdf";var ae=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"page-header",children:"My Resume!"}),Object(n.jsxs)("p",{className:"description-text white-border",children:["Link to download my resume here:\xa0",Object(n.jsx)("a",{className:"inline-link",href:te,download:"Resume_Tanson_Lee.pdf",children:"Resume"})]}),Object(n.jsx)(ee,{})]})},ne=(a(47),a(21)),se=a.n(ne),ie={USER_ID:"user_XUND5UlCcWFthJY0ihUvP",TEMPLATE_ID:"template_3vpbi5c",SERVICE_ID:"service_hbo0hfa"},ce=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"page-header",children:"Contact Me!"}),Object(n.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),se.a.sendForm(ie.SERVICE_ID,ie.TEMPLATE_ID,e.target,ie.USER_ID).then((function(e){alert("Message Sent, I'll get back to you shortly",e.text)}),(function(e){alert("An error occured, Plese try again",e.text),console.log(e)}))},children:[Object(n.jsx)("p",{children:"Your Name:"}),Object(n.jsx)("input",{name:"name",type:"text",placeholder:"name\u2026",className:"form__input"}),Object(n.jsx)("p",{children:"Your Email:"}),Object(n.jsx)("input",{name:"email",type:"text",placeholder:"email\u2026",className:"form__input"}),Object(n.jsx)("p",{children:"Subject:"}),Object(n.jsx)("input",{name:"subject",type:"text",placeholder:"Subject\u2026",className:"form__input"}),Object(n.jsx)("p",{children:"Your Message:"}),Object(n.jsx)("textarea",{name:"message",type:"text",placeholder:"Your Message\u2026",className:"form__input-message"}),Object(n.jsx)("button",{className:"form__input \u2014 button",children:"Send Message"})]})]})},oe=a(22),re=a(23),le=a(25),me=a(24),ue=function(e){Object(le.a)(a,e);var t=Object(me.a)(a);function a(){return Object(oe.a)(this,a),t.apply(this,arguments)}return Object(re.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(s.Component),he=Object(r.f)(ue),ge=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"app-wrapper",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(he,{children:Object(n.jsxs)(r.c,{children:[Object(n.jsx)(r.a,{path:"/",exact:!0,component:k}),Object(n.jsx)(r.a,{path:"/projects",component:Z}),Object(n.jsx)(r.a,{path:"/resume",component:ae}),Object(n.jsx)(r.a,{path:"/contact",component:ce})]})})]})})})};c.a.render(Object(n.jsx)(ge,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a29558ba.chunk.js.map