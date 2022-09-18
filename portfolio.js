import emoji from "react-easy-emoji";

export const greetings = {
	name: "Sami Arfaoui",
	title: "Hello All ",
	description:
		"I'm software engineer, Full Stack developer having an experience of web applications with JAVA, SpringBot, ReactJs, NodeJs,NextJs , Mobile Application with java ,DevOps and Cloud Infrastructure",
	resumeLink:
		"https://drive.google.com/file/d/1wGxEjfXcf3Ov9Dv3zVFlsiJWWTywTCj2/view?usp=sharing",
};

export const openSource = {
	githubUserName: "arfaoui-sami",
};

export const contact = {};

export const socialLinks = {

	linkedin: "https://www.linkedin.com/in/arfaoui-sami-b32645162/",
	github: "https://github.com/arfaoui-sami",
	instagram: "https://www.instagram.com/samiarfaoui__/",
	facebook: "https://www.facebook.com/people/Sami-Arfaoui/100012490392139/",

};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building Mobile Application with java  "
				),
				emoji("⚡ Building responsive websites using ReactJs ,NodeJS ,SpringBoot,Angular"),
				emoji(
					"⚡ Building RESTful APIs in Django & Django REST Framework"
				),
			],
			softwareSkills: [
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "NodeJs",
					fontAwesomeClassname: "logos:nodejs",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "logos:react",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "logos:angular-icon",
				},

				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "Java Mobile Application",
					fontAwesomeClassname: "flat-color-icons:android-os",
				},
				{
					skillName: "Oracle",
					fontAwesomeClassname: "logos:oracle",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Github Actions",
					fontAwesomeClassname: "logos:github-actions",
				},
				{
					skillName: "Cloudinary",
					fontAwesomeClassname: "logos:cloudinary",
				},
				{
					skillName: "Nginx",
					fontAwesomeClassname: "logos:nginx",
				},
				{
					skillName: "Sentry",
					fontAwesomeClassname: "logos:sentry-icon",
				},
			],
		},
		{
			title: "Blockchain",
			lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Experience in developing Smart Contract using Solidity & Ethereum"
				),

			],
			softwareSkills: [
				{
					skillName: "Ethereum",
					fontAwesomeClassname: "logos:ethereum",
				},

			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Backend", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Frontend/Design ",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "TEK-UP Private College of Engineering & Technology ",
		subHeader: "Software Engineer ",
		duration: "September 2019 - JULY  2022",
		desc: "Development Mobile Web application ",
		grade: "Grade A",
		descBullets: [
			"Programming and Building Multiple Application web,Mobile",
			"Using multiple method for Building Infrastructure cloud",
		],
	},
	{
		schoolName: "ULT L'Université Libre de Tunis ",
		subHeader: "Fundamental license in computer  science applied to management",
		duration: "2016 -2019",
		grade: "Grade A",

	},
];

export const experience = [
	{
		role: "Traineeship cloud infrastructure ",
		company: "PROLOGIC",
		companylogo: "/img/icons/common/prologic.png",
		date: " 01/2022 – 06/2022",
		desc:"Implementation of a hybrid cloud infrastructure based on Microsoft Azure technology, automation, supervision and management of the infrastructure",
	},
	{
		role: "Traineeship Devlopper .Net Core",
		company: "TechnoGM",
		companylogo: "/img/icons/common/technogm.png",
		date: "06/2022 – 08/2022",
		desc: " Development of a tourism platform tasks management admin and customer with .Net Core",

	},
	{
		role: "Traineeship AWS design Architectures",
		company: "DEVNET",
		companylogo: "/img/icons/common/devnet.jpg",
		date: "07/2021 - 08/2021",
		desc:"AWS Design Multiple Service Multiple Architecture Cloud Infrastructure Deployment and Testing",
	},
	{
		role: " Developer",
		company: "DEVNET",
		companylogo: "/img/icons/common/devnet.jpg",
		date: "Sept 2021",
		desc: " Desing and developement of  CRM web application for enterprise content mangment web application ",
	},
];

export const projects = [
	{
		name: "Mobile Application  facial recognition",
		desc: "Coding Mobile Application with React Fluttee And NodeJS for pointing by facial recognition",
		github: "https://github.com/arfaoui-sami/P3A.git",
	},

	{
		name: "Management web Application",
		desc: "web Application For Managment with React and NodeJS",
		github: "https://github.com/arfaoui-sami/Mangement-App-.git",
	},
	{
		name: "Cloud infrastructure",
		desc: "Scripting and management VM in Azure and testing performance",
	},
	{
		name: "Implementation Cloud Architecture Service",
		desc: " -Manipulation of active directory, hyper-v ,scvmm Creating a virtualisation architecture with back-up services Creating a script to the handling architecture.",
	},
	{
		name: "chatbox",
		desc: "ChatBox Applicaiton  with java",
		github: "https://github.com/arfaoui-sami/chatbox.git",
	},

	{
		name: "Video_Player",
		desc: "Coding VideoPlayer with JavaScript Native",
		github: "https://github.com/arfaoui-sami/Video_Player.git",
	},
	{
		name: "doctor-platform",
		desc: "Web Application doctor medical (spring boot-mysql-Angular) ",
	},
	{
		name: " I-sing",
		desc: "Android social media application (java, Fire base) to uplode video ,chat to followers ",
	},
];



// See object prototype on SEO.jsx page
export const seoData = {
	title: "Sami Arfaoui",
	description:
		"A passionate Full Stack Web mobile  Developer and Cloud Infrastructure.",
	author: "Sami Arfaoui",
	image: "https://avatars3.githubusercontent.com/arfaoui-sami",

	keywords: [
		"Arfoui",
		"Samiarfaoui",

	],
}
