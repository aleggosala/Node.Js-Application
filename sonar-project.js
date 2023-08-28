const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.73.236.30:9000/',
  options: {
    'sonar.projectDescription': 'Node.Js-Application',
    'sonar.projectName': 'Node.Js-Application',
    'sonar.projectKey': 'Node.Js-Application', // Updated project key
    'sonar.login': 'sqp_9fa573bd630cd43cbab57a9e129f4e310686e208', // Your SonarQube token
    'sonar.projectVersion': '1.0',
    'sonar.language': 'js',
    'sonar.sourceEncoding': 'UTF-8',
    'sonar.sources': 'api,auth,lib,modules,test', // Comma-separated list of relevant directories
    'sonar.branch.name': 'main', // Your project's main branch
  },
});
