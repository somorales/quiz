# quiz

## [See the App!]

![quiz Logo](./src/assets/images/logo.png)

## Description

Do you really know yourself? ‘What Would I Choose’ is a question game that challenges you to discover how you would react in fun and surprising situations. Play and put your self-knowledge to the test!

#### [Client Repo here](https://github.com/somorales/quiz)

## Technologies, Libraries & APIs used

- **Frontend:** React, HTML5, CSS3, JavaScript

- **Styling:** Tailwind

- **Version control:** GitHub
- **Deployment:** Netlify (Frontend)

## Backlog Functionalities

- **Select a question:** Users choose questions randomly.
- **Select an answer::** The user can choose one of the possible answers to the question.
- **View all answers to different questions:** The user can see the questions and their answers, as well as how many questions they have answered

# Client Structure

## User Stories

- homepage - As a user, I want to be able to access the homepage so that I can see the 'Get Started' button to start the game.
- gamepage - As a user, I want to shuffle, select, and view a question, as well as be able to choose an answer.
- resultspage- As a user, I want to view the quiz and my selected answer for each question, as well as see the number of questions I have answered.
- playguide- As a user, I want to view what the game is about and how to play.

## Client Routes

| Path         | Page        | Components    | Permissions | Behavior                                                                                              |
| ------------ | ----------- | ------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `/`          | Home        | HomePage      | public      | Home page with 'Get Started' button to start the game                                                 |
| `/game`      | GamePage    | GamePage      | public      | Shuffle, select, and view a question, choose an answer                                                |
| `/answers`   | ResultsPage | ResultsPage   | public      | View the quiz, see the selected answers for each question, and the total number of questions answered |
| `/playguide` | PlayGuide   | PlayGuidePage | public      | View what the game is about and how to play                                                           |

## Other Components

- **Navbar:** Navigation bar with links to the main sections of the app (home and profile).
- **Footer:** Link to my website.

## Links

### Project

[Repository Link Client](https://github.com/somorales/quiz)

[Deploy Link]

### Model Planning

[Model Planning Link](https://www.figma.com/design/7Ze9W69jep6CLucInntNqS/What-would-I--choose%3F?node-id=0-1&t=8pvbeymr08sIgqHu-1)
