function LicenseBadge(License) {
  if (License === "MIT") {
    return "## Badges\n" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

  } else if (License === "Apache License 2.0") {
    return "## Badges\n" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  } else if (License === "GNU GPL v3") {
    return "## Badges\n" + "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";

  }else {
    return "";
  }
}

function generateMarkdown(data) {

  return `

${LicenseBadge(data.License)}

# ${data.Title}
https://github.com/${data.Github}/${data.Title}

# Description
${data.Description}

# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}

# Usage
In order to use this app, ${data.Usage}

# License
This project is licensed under the ${data.License} license. 

# Contributing
​Contributors: ${data.Contributing}

# Tests
The following is needed to run the test: ${data.Tests}

# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;
