// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'GNU General Public License v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === 'Unlicensed') {
    return ``
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
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
  
  This is licensed under ${data.license}.
  
  ## Questions

  Questions about this repository? Please contact the owner at [${data.email}](mailto:${data.email}). View more work from the owner in GitHub at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
