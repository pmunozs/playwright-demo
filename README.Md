# 🎭 Playwright Demo
This is a sample automation project using 
[Playwright](https://playwright.dev/)

## Table of Contents
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li><a href="#prerequisites">Prerequisites</a>
            <li><a href="#setup">Setup</a>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#acknowledgments">Acknowledgments</a></li>
            <li><a href="#bugs-or-suggestions">Bugs or Suggestions?</a></li>
          </ol>
        </h5>    
    </details>
</h2>

## Prerequisites
- nodejs: https://nodejs.org/en/download/


## Setup
1. Clone the repo: `git clone git@github.com:pmunozs/playwright-demo.git`
2. Navigate to project folder and install npm packages: `npm install`
3. Install required browsers: `npx playwright install`
4. Install Playwright's dependencies: `npx playwright install-deps`

## Usage
### Execute
1. To execute all tests in headless mode: `npx playwright test`
2. To execute tests in UI mode: `npx playwright test --ui`
3. To execute tests in headed mode: `npx playwright test --headed`
4. To execute tests for a specific browser: `npx playwright test --project firefox`
5. To run a single test file: `npx playwright test signup.spec.ts`

### Reports
Use `npx playwright show-report` to see a detailed report of executed test


## Acknowledgments
- [Automation Exercise](https://automationexercise.com/)
- [Datafactories](https://gist.github.com/nadvolod/da44ba1997fe44f737be66c431c6ef72#file-datafactory-ts)


## Bugs or Suggestions
- Please create an
[issue](https://github.com/pmunozs/playwright-demo/issues) giving a detailed description of the bug, improvement or test case that you would like me to add 🚀
