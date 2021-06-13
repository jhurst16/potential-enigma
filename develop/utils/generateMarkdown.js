const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title:
  ${data.name}

  ## Description
  ${data.description}

  # Table of contents
  1. [Usage](#Usage)
  2. [License](#License)
  3. [Contributing](#Contributing)
  4. [Languages](#Languages)
  5. [Installation](#Installation)
  6. [GitHub Link](#GitHubLink)
  7. [Questions](#Questions)

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Languages
  ${data.language}

  ## Installation
  ${data.installation}

  ## GitHub Link
  https://github.com/${data.link}

  ## Questions
  For any and all questions please email me @ ${data.email} or https://github.com/${data.link} Thank you!
  `;
}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
          }

          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok: true,
              message: 'README is created!'
          });
      });
  });
};

module.exports = { generateMarkdown, writeFile };