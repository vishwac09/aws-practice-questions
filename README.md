# AWS Practice Question

React application allowing users to practice the AWS certification examination questions in a __Multiple Choice__ question format. Built this small application to learn and practice react concepts, components, theme layer, redux etc and also to get ready for the AWS certifications.

I have recently also created some notes for the [AWS Cloud practitioner](https://github.com/vishwac09/aws-cloud-practitioner#other-services) certification. I will add more questions, notes and guides on clearing more AWS certifications.

> I am a newbie in REACT. If you wish to contribute to the application or find any issues or an incorrectly implemented logic please raise an issue or create a pull request. Happy to learn from the experts.

# Getting Started

## Table of Contents
  - [Local Setup](#local-setup)
  - [Project Structure](#project-structure)

### Local Setup

Fork the repository or clone from Github.

```sh
git clone git@github.com:vishwac09/aws-practice-questions.git
cd aws-practice-questions
```

<ins>Install the dependencies</ins>

```sh
yarn install
```

<ins>Install the dependencies</ins>

```sh
yarn start
```
---

### Project Structure

📦src
 ┣ 📂data
 ┃ ┣ 📜ccp.json
 ┃ ┗ 📜certifications.json
 ┣ 📂features
 ┃ ┣ 📂certification
 ┃ ┣ 📂exam
 ┃ ┣ 📂question
 ┃ ┗ 📂result
 ┣ 📂layout
 ┃ ┣ 📜TwoColumn.js
 ┃ ┗ 📜index.js
 ┣ 📂regions
 ┃ ┣ 📜Sidebar.js
 ┃ ┗ 📜index.js
 ┣ 📂store
 ┃ ┗ 📜Store.js
 ┣ 📂theme
 ┃ ┣ 📂sass
 ┃ ┃ ┣ 📜_custom.scss
 ┃ ┃ ┣ 📜_variables.scss
 ┃ ┃ ┗ 📜_variables_override.scss
 ┃ ┗ 📜import.scss
 ┣ 📜App.js
 ┗ 📜index.js

The application layout is Two column (sidebar and a main content region). The sidebar list the total number of certifications enabled/available, clicking the certification highlight's and starts the corresponding certification exam.

##### Certification List
The list is populated by reading the the certifications.json file which can be found in the "data/" directory. Field "active" controls the visibility of that certification.

##### Questions
Every certification read from the certifications.json file points to the associated questions "json" file.

##### Redux
The application uses Redux to store the state of the application. Every component registers it own state.
