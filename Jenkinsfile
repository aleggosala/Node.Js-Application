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
                script {
                    def scannerHome = tool 'sonarqube'
                    withSonarQubeEnv() {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = docker.build("alexjander/my-node-app:latest", "-f Dockerfile .")
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-pswd', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        echo "Docker Hub credentials loaded: DOCKER_USERNAME = $DOCKER_USERNAME"
                        sh '''
                            docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
                            docker push alexjander/my-node-app:latest
                        '''
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                sh "docker-compose -f docker-compose.yaml up -d"
            }
        }
    }
}
