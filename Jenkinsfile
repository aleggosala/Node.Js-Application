pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'githubpswd', url: 'https://github.com/aleggosala/Node.Js-Application.git'
            }
        }
        
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs20.5.1') {
                    sh "npm install"
                }
            }
        }
        
        stage('Sonarqube') {
            steps {
                nodejs(nodeJSInstallationName: 'nodejs20.5.1') {
                    sh "npm run sonarqube"
                }
            }
        }
    }
}
