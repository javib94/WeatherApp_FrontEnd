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
                    docker build -t WeatherApp_Frotend .
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
                    docker tag WeatherApp_Frotend jacevel97/WeatherApp_Frotend:latest
                    docker push jacevel97/WeatherApp_Frotend:latest
                '''
            }
        }
    }
}

