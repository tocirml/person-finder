# Person Finder

## Description

Challenge for LifeTime Value .

This app is a test for the company LifeTime Value.

The app will look into an API and return info based on the email provided.

The API will respond to any one of these following email addresses with valid data:

1. jonsmith@example.com
2. janesmith@example.com
3. doesmith@example.com
   For any other email address or if an email address is not passed in at all, the API will respond
   with an empty array.

When any other input rather than a email address is placed for search it will do a client validation.

When it looks for an email that cant be found will return 0 Results.

When it finds info corresponding to the email, it will display a card with the person data.

The application is responsive, and has a good UX on for phones, tables or monitors.

The app is currently running on https://ltv-person-finder.herokuapp.com/

## Installation

On a terminal, navigate into a desired folder:

```bash
git clone https://github.com/tocirml/person-finder.git
```

```bash
npm install
```

```bash
npm start
```

The app should run on http://localhost:3000

## The Solution

The approach for the solution of this challenge was very simple, using HTML, pure CSS, some Javascript. No bootstrap, or jQuery was really used.

The HTML necessary for the landing page was created and all styles needed were added into a separate .css file. Then a JS file was added in order to validate the form in a simple way.

For the results page, a second HTML file was create, using the same css file + another css file for some exclusive styles needed.

Also, a corresponding results.js file was created in order to extract the email from the parameters and make the API call. Then show the results, with some dynamic HTML create inside JS.

The css file used many ways to approach as much as possible to the mockups.

Finally, node was used with express to create a small file to serve the app, and make it run on Heroku.
