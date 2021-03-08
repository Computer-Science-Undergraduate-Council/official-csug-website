# Computer Science Undergraduate Council

This repo contains the website configuration and documentation for the official website of Computer Science Undergraduate Council (CSUG)

CSUG is a club at the University of Rochester and strives to build a better community of students at the University. As such, this github organization along with this repository is intended to provide resources collected from within the community and to encourage open source development.

You can find the deployed version at: https://computer-science-undergraduate-council.github.io/official-csug-website/#/

This repository along with the GitHub organization is maintained by the CSUG E-Board

## Getting Started


### Requirements
1. [Git](https://git-scm.com/downloads).
2. [Node](https://nodejs.org/en/download/) or [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Steps to follow
1. Go to the [repository](https://github.com/Computer-Science-Undergraduate-Council/official-csug-website) 
2. [Fork the repository to your GitHub](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) using the Fork tool at the top right. This will create a copy (actually a fork) in your GitHub for you to work on.
3. [Clone the repository to your local computer](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). This will create a local version in your computer. This is linked with your remote repository (the repository on your GitHub)
4. Open Command Line terminal at folder where you've cloned the repository 
5. Type `npm start` or `yarn start` to run the code locally
6. Go to `http://localhost:3000/` to see the website
7. Learn about [the structure of the project](#structure-of-code) and make your changes where needed
8. Add your changes to your local git using `git add .` (The dot at the end is important)
9. Commit your changes with a helpful message. Example: `git commit -m "Added informative ReadMe.md file"` 
10. Push your code to your remote repository using `git push origin main`. If this fails, then git will automatically give you a suggestion to 'set upstream' with the link to your remote repo. Copy this and type the push command again.
11. [Create a Pull Request(PR)](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) for your remote repo to be merged with the organization's. Here, you can compare your changes, add more detailed messages and then submit the Pull Request (PR).  
12. Once an organization member reviews your PR, your PR will be merged.

### Structure of Code

This website is built using React. The code is broken into smaller Components which can be found in `src/assets/Components`

Each Component uses an [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) structure.
This means that each component has three files
1. `index.data.jsx`: This file contains and exports the **data** that will be used by the component. This could be a collection of information or something received from the database. Note: In this project a data file has been added to Components even when not necessary so that we can maintain the structure and allow easy integration in case it's needed in the future.
2. `index.view.jsx`: This file contains and exports the **view** that will be used by the component. This file would include all the positioning and styling of the elements of a component. The data will be passed to this file to be displayed if needed.
3. `index.jsx`: This file is the **controller** and represents the entire component. This file is called by default. This file defines what will be exported by the Component and in what manner. For example, TimeLine and E-board export the data file by default whereas others export the view file by default.



