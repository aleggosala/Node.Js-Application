const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.73.236.30:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node.Js-Application',
    'sonar.projectKey': 'sqp_43f92dc275a95f621ed2c522062e700bdc3312bd',
    'sonar.login': 'sqp_43f92dc275a95f621ed2c522062e700bdc3312bd', // Use your SonarQube token here
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'api,auth,lib,modules,test', // Comma-separated list of relevant directories
  },
});
