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
                    docker build -t weatherapp_frotend .
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
                    docker tag weatherapp_frotend jacevel97/weatherapp_frotend:latest
                    docker push jacevel97/weatherapp_frotend:latest
                '''
            }
        }
    }
}

