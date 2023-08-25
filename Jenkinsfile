pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', credentialsId: 'githubpswd', url: 'https://github.com/aleggosala/Node.Js-Application.git'
            }
        }
    }
}
