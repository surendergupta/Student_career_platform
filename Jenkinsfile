pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
        DOCKERHUB_CREDENTIALS= credentials('dockerhubcredentials')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git 'https://github.com/surendergupta/Student_career_platform.git'
            }            
        }
        stage('Checkout') {
            steps {
                // Checkout code from GitHub repository
                git 'https://github.com/surendergupta/Student_career_platform.git'
            }
        }

        stage('Build') {
            steps {
                // Add build steps here (e.g., compiling code, running tests)
                sh 'npm install' // Example command, replace with actual build commands
            }
        }

        stage('Test') {
            steps {
                // Add test steps here (e.g., running unit tests, integration tests)
                sh 'npm test' // Example command, replace with actual test commands
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here (e.g., deploying to a server, pushing Docker images)
                sh 'docker build -t myapp . && docker run -d myapp' // Example Docker deployment, replace with actual deployment commands
            }
        }
    }
}

