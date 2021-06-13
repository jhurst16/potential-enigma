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
  return `#${data.name}
  ## Description
  ${data.description}
  *${data.language}

  ## What did I Learn?
  ${data.learning}

  ## GitHub Link
  ${data.link}

  ## Table of Contents
  (#installation)
  (#contribution)
  (#tests)
  (#license)
  (#email)

  ## Installation
  ${data.installation}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.tests}

  ## Licensing 
  ${data.licenses}

  ## Connect With Me
  For any and all questions please email me @${data.email} or ${data.link} Thank you!
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