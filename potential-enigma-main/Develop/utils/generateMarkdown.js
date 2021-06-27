// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    return `https://img.shields.io/static/v1?label=License&message=${license}&color=orange`;

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
    This project is under ${license.choices}(${renderLicenseLink(license)}) License.
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ##Description
  ${data.description}

  ##Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ##Installation
  ${data.install}

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credits}

  ##Contributing
  ${data.contribute}

  ##Tests
  ${data.test}
`;
}

module.exports = generateMarkdown;
renderLicenseBadge();
renderLicenseLink();
renderLicenseSection();
