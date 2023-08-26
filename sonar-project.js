const fs = require('fs');

// Get the current sonar-project.js file contents
let sonarProjectJsContents = fs.readFileSync('sonar-project.js', 'utf8');

// Update the sonar-project.js file contents
sonarProjectJsContents = sonarProjectJsContents.replace(
  'sonar.projectKey',
  'sqp_43f92dc275a95f621ed2c522062e700bdc3312bd'
);

// Write the updated sonar-project.js file contents
fs.writeFileSync('sonar-project.js', sonarProjectJsContents, 'utf8');
