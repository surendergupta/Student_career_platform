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

        stage('Docker Login') {
            steps {
                // Navigate to the frontend directory
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                		
	              echo 'Login Completed'
            }
        }
        stage('Build Frontend') {
            steps {
                // Navigate to the frontend directory
                dir('frontend') {
                    // Build frontend Docker image
                    sh 'sudo docker build -t surendergupta/frontend-image .'
                    echo 'Build Frontend Image Completed'
                }
            }
        }

        stage('Build Backend') {
            steps {
                // Navigate to the backend directory
                dir('backend') {
                    // Build backend Docker image
                    sh 'sudo docker build -t surendergupta/backend-image .'
                    echo 'Build Backend Image Completed'
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps{
                sh 'sudo docker push surendergupta/frontend-image:$BUILD_NUMBER'
                sh 'sudo docker push surendergupta/backend-image:$BUILD_NUMBER'
                echo 'Push Image Completed'
              }
        }
    }
    post{
        always {  
            sh 'docker logout'
            echo 'Docker Logout Successfully Done'
        }      
    }  
}

