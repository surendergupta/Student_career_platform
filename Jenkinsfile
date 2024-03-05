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
    }
}

