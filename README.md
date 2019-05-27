<p align="center">
  <a href="https://highstart.dev">
    <img alt="Frontend for Beginners" src="https://highstart.dev/logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Frontend for Beginners blog
</h1>

Frontend for Beginners blog contains articles and tutorials aimed mainly at novices in frontend development.

## 🚀 Development guide

1.  **Install packages using npm**

    Generally the packages are installed using following notation:

    ```sh
    # development dependencies
    npm install (name of the package) --save-dev
    # runtime dependencies
    npm install (name of the package) --save
    # installs all packages from package.json
    npm install
    ```
    Occasionally gatsby plugins may be useful, then edit `gatsby-config.js` as well.

2.  **Use Gatsby.js commands**

    This blog is built using the gatsby.js starter template and uses following commands:

    ```sh
    # to develop locally at http://localhost:8000
    gatsby develop
    # to build
    gatsby build
    ```
3.  **Linting the code**

    This blog uses ESLint to check programmatic and stylistic errors in Javascript.
    If you want to fix all the possible errors in the codebase run
    ```sh
      npm run lint
    ```
    This command will fix minor errors like indentation and will warn about more complex ones.

    Generally ESLint runs on each commit, checking the code to be commited, and highlights possible errors. This is done via <a href="https://github.com/okonet/lint-staged" title="run linters on git staged files">lint-staged</a> and <a href="https://github.com/typicode/husky" title="Git hooks made easy">husky</a> packages, the latter leveraging git hooks.

4. **Commit conventions**

    This project uses <a href="https://github.com/conventional-changelog/commitlint" title="Lint commit messages">commit-lint package</a>. This means that the commits should follow <a href="https://www.conventionalcommits.org/en/v1.0.0-beta.4/" title="Conventional Commits">conventional commits</a> pattern for better human and machine readability.
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

5. **Testing**

    This project uses Mocha + Puppeteer tests run with `npm run test`. The tests are added to the `test/server-test.js` files. Currently they check if all pages of the projects are loaded properly.
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

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

2.  **`.circleci`**: This file contains CircleCI instructions, including testing the code automatically when attempting to merge into master.

3.  **`.eslintrc.js`**: This file contains ESLint configuration, common JavaScript coding conventions.

4.  **`.commitlint.config.js`**: This file contains initial commit lint configuration, extended in package.json.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where Gatsby plugins are included and possibly the website metadata. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`LICENSE`**:  MIT license.

9.  **`/node_modules`**: This directory contains all of the modules of code that this project depends on (npm packages) are automatically installed.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of the npm dependencies that were installed for this project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes this project metadata (the project’s name, author, etc) and npm packages used, also their settings and scripts. This manifest is how npm knows which packages to install for your project.

12.  **`/public`**: This is automatically generated folder during build process for testing and deployment.

13.  **`/src`**: This directory contains all of the code related to the front-end of this site.

14.  **`/src/components`**: This subdirectory contains all the reusable components used on the website: header, footer, buttons, different UI elements.

15.  **`/src/pages`**: This subdirectory contains the website's pages, including homepage and about page (e.g. `about.js`) and blog pages in markdown format (e.g. `center-with-css.md`).

16.  **`/src/styles`**: This subdirectory contains main `global.css` stylesheet and `fonts` folder

17.  **`/src/templates`**: This subdirectory contains templates for auto-generated pages, such as blogposts and tag pages.

18.  **`/static`**: This directory contains static assets used, images.

19.  **`/test`**: This dirrectory contains tests.

20. **`README.md`**: This reference file.

## 🎓 Learning Gatsby

Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

## 💫 Deploy

This project is deployed to Netlify automatically from `master` branch.

