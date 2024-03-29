import logos from "../assets/technology-logos";

const {
	c,
	github,
	javascript,
	python,
	// r,
	// racket,
	vim,
	vscode,
	react,
	sass,
	restApis,
	node,
	express,
	// mongodb,
	redux,
	postgres,
	cpp,
	bash,
	// linux,
	stackOverflow,
} = logos;

const frontend = {
	topic: "Frontend",
	items: [
		{
			item: "JavaScript",
			image: javascript,
		},
		{
			item: "React",
			image: react,
		},
		{
			item: "Redux",
			image: redux,
		},
		{
			item: "SASS",
			image: sass,
		},
	],
};

const backend = {
	topic: "Backend",
	items: [
		{
			item: "Node.js",
			image: node,
		},
		{
			item: "Express",
			image: express,
		},
		{
			item: "PostgreSQL",
			image: postgres,
		},
		{
			item: "REST APIs",
			image: restApis,
		},
	],
};

const languages = {
	topic: "Languages",
	items: [
		{
			item: "Python",
			image: python,
		},
		{
			item: "C++",
			image: cpp,
		},
		{
			item: "C",
			image: c,
		},
		{
			item: "Bash",
			image: bash,
		},
	],
};

const tools = {
	topic: "Tools",
	items: [
		{
			item: "GitHub",
			image: github,
		},
		{
			item: "Vim",
			image: vim,
		},
		{
			item: "VSCode",
			image: vscode,
		},
		{
			item: "Stack Overflow",
			image: stackOverflow,
		},
	],
};

const skillData = [frontend, backend, languages, tools];

export default skillData;

/*
const SkillData = [
	{
		topic: "Frontend",
		items: [
			{
				item: "JavaScript",
				image:
					"https://github.com/tansonlee/website-images/blob/main/python-logo.png?raw=true",
			},
			{
				item: "React",
				image:
					"https://github.com/tansonlee/website-images/blob/main/javascript-logo.png?raw=true",
			},
			{
				item: "SASS",
				image: "https://github.com/tansonlee/website-images/blob/main/c-logo.png?raw=true",
			},
			{
				item: "REST APIs",
				image:
					"https://raw.githubusercontent.com/tansonlee/website-images/ebe3c044546b9ca44e4a5cf7fe7b7d89d6ac744b/r-logo.svg",
			},
		],
	},
	{
		topic: "Backend",
		items: [
			{
				item: "Node.js",
				image:
					"https://github.com/tansonlee/website-images/blob/main/python-logo.png?raw=true",
			},
			{
				item: "Express",
				image:
					"https://github.com/tansonlee/website-images/blob/main/javascript-logo.png?raw=true",
			},
			{
				item: "MongoDB",
				image: "https://github.com/tansonlee/website-images/blob/main/c-logo.png?raw=true",
			},
			{
				item: "Redux",
				image:
					"https://raw.githubusercontent.com/tansonlee/website-images/ebe3c044546b9ca44e4a5cf7fe7b7d89d6ac744b/r-logo.svg",
			},
		],
	},
	{
		topic: "Languages",
		items: [
			{
				item: "Python",
				image:
					"https://github.com/tansonlee/website-images/blob/main/python-logo.png?raw=true",
			},
			{
				item: "C",
				image: "https://github.com/tansonlee/website-images/blob/main/c-logo.png?raw=true",
			},
			{
				item: "R",
				image:
					"https://raw.githubusercontent.com/tansonlee/website-images/ebe3c044546b9ca44e4a5cf7fe7b7d89d6ac744b/r-logo.svg",
			},
			{
				item: "Racket",
				image:
					"https://raw.githubusercontent.com/tansonlee/website-images/ebe3c044546b9ca44e4a5cf7fe7b7d89d6ac744b/racket-logo.svg",
			},
		],
	},
	{
		topic: "Technologies",
		items: [
			{
				item: "GitHub",
				image:
					"https://github.com/tansonlee/website-images/blob/main/github-logo.png?raw=true",
			},
			{
				item: "Linux",
				image:
					"https://github.com/tansonlee/website-images/blob/main/p5js-logo.png?raw=true",
			},
			{
				item: "Vim",
				image:
					"https://github.com/tansonlee/website-images/blob/main/vim-logo.png?raw=true",
			},
			{
				item: "VSCode",
				image:
					"https://github.com/tansonlee/website-images/blob/main/vscode-logo.png?raw=true",
			},
		],
	},
];
*/
