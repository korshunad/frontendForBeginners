<p align="center">
  <a href="https://highstart.dev">
    <img alt="Frontend for Beginners" src="https://highstart.dev/logo.svg" width="200" />
  </a>
</p>
<h1 align="center">
  Frontend for Beginners blog (highstart.dev)
</h1>

Frontend for Beginners blog contains articles and tutorials aimed mainly at novices in frontend development.

## 🚀 Development guide

### 1.  **Install packages using npm**

    Generally, the packages are installed using the following notation:

    ```sh
    # development dependencies
    npm install (name of the package) --save-dev
    # runtime dependencies
    npm install (name of the package) --save
    # installs all packages from package.json
    npm install
    ```
    Occasionally gatsby plugins may be useful, then edit `gatsby-config.js` as well.

### 2.  **Use Gatsby.js commands**

    This blog is built using the gatsby.js starter template and uses the following commands:

    ```sh
    # to develop locally at http://localhost:8000
    gatsby develop
    # to build
    gatsby build
    ```
### 3.  **Linting the code**

    This blog uses ESLint to check programmatic and stylistic errors in Javascript.
    If you want to fix all the possible errors in the codebase run
    ```sh
      npm run lint
    ```
    This command will fix minor errors like indentation and will warn about more complex ones.

    Generally ESLint runs on each commit, checking the code to be commited, and highlights possible errors. This is done via <a href="https://github.com/okonet/lint-staged" title="run linters on git staged files" target="_blank" rel="noopener noreferrer">lint-staged</a> and <a href="https://github.com/typicode/husky" title="Git hooks made easy" rel="noopener noreferrer">husky</a> packages, the latter leveraging git hooks.

### 4. **Commit conventions**

    This project uses <a href="https://github.com/conventional-changelog/commitlint" title="Lint commit messages" rel="noopener noreferrer">commit-lint package</a>. This means that the commits should follow <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" title="Conventional Commits" rel="noopener noreferrer">conventional commits</a> pattern for better human and machine readability.
    The general structure is the following:
    ```sh
    type(scope?): subject  #scope is optional
    ```
    And the types used in this project are the following:
    <ul>
      <li>feat (feature),</li>
      <li>fix (bug fixes, etc),</li>
      <li>docs (documentation),</li>
      <li>style (altering styles, changing design),</li>
      <li>refactor (refactoring code),</li>
      <li>test (adding tests),</li>
      <li>revert (undo smth),</li>
      <li>setup (initial setup issues)</li>
    </ul>
    Each intended commit is checked to conform to the `type: subject` formula.

### 5. **Testing**

    This project uses Mocha + Puppeteer tests run with `npm run test`. The tests are added to the `test/server-test.js` files. Currently, they check if all pages of the projects are loaded properly.
    When a pull request to `master` branch is created, the tests are run automatically by CircleCI.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── .gitignore
    ├── .circleci
    ├── .eslintrc.js
    ├── commitlint.config.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    ├────── components
    ├────── pages
    ├────── styles
    ├────── templates
    ├── static
    ├── test
    └── README.md

| Page                  | Type                           | Description                                                                                                                        |
|-----------------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| .gitignore            | file                           | tells git which files it should not track / not maintain a version history for                                                     |
| .circleci/config      | setup file                     | CircleCI instructions, including testing the code automatically when attempting to merge into master                               |
| .eslintrc.js          | setup file                     | ESLint configuration, common JavaScript coding conventions                                                                         |
| .commitlint.config.js | setup file                     | initial commit-lint configuration                                                                                                  |
| gatsby-browser.js     | Gatsby setup file              | usage of the Gatsby browser APIs, extension of the default Gatsby settings affecting the browser                                   |
| gatsby-config.js      | Gatsby setup file              | main configuration file for a Gatsby site, includes Gatsby plugins and possibly the website metadata                               |
| gatsby-node.js        | Gatsby setup file              | Gatsby Node APIs (if any), here blog and tag pages are setup to be generated                                                       |
| LICENSE               |                                | MIT License                                                                                                                        |
| /node_modules         | folder                         | all of the modules of code that this project depends on (npm packages), automatically generated                                    |
| package.json          | manifest file                  | the project metadata (the project’s name, author, etc.) and npm packages used, also their settings and scripts                     |
| package-lock.json     | automatically generated file   | is based on the exact versions of the npm dependencies that were installed for this project                                        |
| /public               | automatically generated folder | output of the build process, is used for testing and deployment                                                                    |
| /src                  | code directory                 | source code, related to the front-end of the site                                                                                  |
| /src/components       | code subdirectory              | all the reusable components used on the website: header, footer, buttons, different UI elements                                    |
| /src/pages            | code subdirectory              | the website's pages, including homepage and about page (e.g. about.js) and blog pages in markdown format (e.g. center-with-css.md) |
| /src/styles           | code subdirectory              | main global.css stylesheet and fonts folder                                                                                        |
| /src/templates        | code subdirectory              | templates for auto-generated pages, such as blog posts and tag pages.                                                              |
| /static               | file directory                 | static assets, such as images, that are not processed by Webpack, but copied into the public folder untouched.                     |
| /test                 | code directory                 | Puppeteer + Mocha tests to check the pages are built properly                                                                      |
| README.md             | docs file                      | describes this project structure and development process                                                                           |

### 🎓 Learning Gatsby

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/).

### 💫 Deploy

This project is deployed to Netlify automatically from `master` branch.

