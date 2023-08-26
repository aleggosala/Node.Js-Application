const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.73.236.30:9000/',
  options: {
    'sonar.projectDescription': 'Node.Js-Application',
    'sonar.projectName': 'Node.Js-Application',
    'sonar.projectKey': 'Node.Js-Application', // Updated project key
    'sonar.login': 'sqp_43f92dc275a95f621ed2c522062e700bdc3312bd', // Your SonarQube token
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'api,auth,lib,modules,test', // Comma-separated list of relevant directories
    'sonar.branch.name': 'main', // Your project's main branch
  },
});
