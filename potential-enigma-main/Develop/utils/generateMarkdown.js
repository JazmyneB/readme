// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `![License](https://img.shields.io/badge/License-${license}-orange.svg)`;

  } else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT': return 'https://opensource.org/licenses/MIT';
    case 'Apache': return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL': return 'https://opensource.org/licenses/gpl-license';
    case 'None': return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## License
    This project is Licensed under ${license}. For more information, please visit: ${renderLicenseLink(license)}
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions or concerns about this application, please contact me via email: __${data.email}__ You may also visit my Github page: __https://github.com/${data.username}__
`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
