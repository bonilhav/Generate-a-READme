// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  
  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation

  Please install the following dependances:

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.installation}

  ## Tests
  
  Tests can be run using the following:
  ${data.tests}

  ## License
  
  This repository is licensed under the ${data.license} license.
  
  ## Questions

  Questions about this repository? Please contact the owner at [${data.email}](mailto:${data.email}). View more work from the owner in GitHub at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
