pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials-id')
        SSH_CREDENTIALS = credentials('ssh-credentials-id')
        SONAR_TOKEN = credentials('sonar-token-id')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: 'main']],
                    userRemoteConfigs: [[credentialsId: 'your-git-credentials-id', url: 'https://github.com/magnifi-codeverse/auto-deployment.git']]
                ])
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Linting and Code Analysis') {
            steps {
                sh 'npm run lint'
                sh "sonar-scanner -Dsonar.projectKey=my-app -Dsonar.organization=magnifi-codeverse -Dsonar.host.url=https://sonarcloud.io -Dsonar.login=${SONAR_TOKEN}"
            }
        }
        
        stage('Build Application') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    def dockerImage = 'my-app'
                    def dockerTag = '1.0.0'
                    
                    docker.build("${dockerImage}:${dockerTag}", '.')
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_HUB_CREDENTIALS) {
                        dockerImage.push()
                        dockerImage.tag('latest')
                    }
                }
            }
        }
        
        stage('Docker Image Scanning') {
            steps {
                script {
                    def dockerImage = 'my-app'
                    def dockerTag = '1.0.0'
                    
                    sh "clair-scanner -c http://clair:6060 --ip $(hostname -I | awk '{print $1}') -r /tmp/clair-report.json ${dockerImage}:${dockerTag}"
                }
            }
        }
        
        stage('Tag Docker Image') {
            steps {
                sh "docker tag my-app:latest my-app:1.0.0"
            }
        }
        
        stage('Create Release Artifact') {
            steps {
                archiveArtifacts(artifacts: 'build/distributions/*.zip', fingerprint: true)
            }
        }
        
        stage('Deploy to Production') {
            steps {
                script {
                    sshagent(credentials: ['${SSH_CREDENTIALS}']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no user@production-server << EOF
                        cd /path/to/your/app
                        docker-compose pull
                        docker-compose down
                        docker-compose up -d
                        EOF
                        """
                    }
                }
            }
        }
        
 
