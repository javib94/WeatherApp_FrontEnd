pipeline {
    agent none
    stages {
        stage('Build') {
            agent {
                label 'master'
            }
            steps {
                echo "Realizando build previo a la subida"
                sh '''
                    docker build -t weatherapp_frontend .
                '''
            }
        }
        stage('TagAndPush') {
            agent {
                label 'master'
            }
            steps {
                echo "Tag and Push"
                sh '''
                    docker login --username jacevel97 --password carlosveliz97
                    docker tag weatherapp_frontend jacevel97/weatherapp_frontend:latest
                    docker push jacevel97/weatherapp_frontend:latest
                '''
            }
        }
    }
}

