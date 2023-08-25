pipeline {
    agent any
    
    stages {
        stage('Git Checkout') {
            steps {
                script {
                    git branch: 'main', credentialsId: 'githubpswd', url: 'https://github.com/aleggosala/Node.Js-Application.git'
                }
            }
        }
    }
}
