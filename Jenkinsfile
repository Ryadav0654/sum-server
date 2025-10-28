pipeline {
    agent any
    stages {
        stage("Checkout code"){
            steps{
                git "https://github.com/Ryadav0654/sum-server.git"
            }
        }
        stage("Build") {
            steps {
                sh 'echo "building the app"'
            }
        }
        stage("Test"){
            steps {
                sh 'echo "Testing..."'
            }
        }
        stage("deploy"){
            steps {
                sh 'echo "deploying..."'
            }
        }
    }
}