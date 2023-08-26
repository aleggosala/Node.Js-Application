pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                // Checkout the source code from the repository
                git branch: 'main', credentialsId: 'githubpswd', url: 'https://github.com/aleggosala/Node.Js-Application.git'
            }
        }
        
        stage('Build') {
            steps {
                // Use Node.js to install dependencies
                nodejs(nodeJSInstallationName: 'nodejs20.5.1') {
                    sh "npm install" // Use 'npm ci' for exact dependency versions
                }
            }
        }
        
        stage('Sonarqube') {
            steps {
                // Use SonarQube Scanner for analysis
                script {
                    def scannerHome = tool 'sonarqube'
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}
