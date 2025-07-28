pipeline {
    agent any
    parameters {
        string(name: 'Name', defaultValue: "Sachin")
        choice(name: 'Browser', choices: ['chromium', 'firefox', 'webkit', 'MicrosoftEdge', 'GoogleChrome'])
        choice(name: 'script', choices: ['id-1', 'id-2', 'id-3', 'id-4', 'id-5', 'id-6', 'smoke', 'reg'])
        booleanParam(name: 'Headed', defaultValue: true)
        booleanParam(name: 'Debug', defaultValue: false)
    }
    stages {
        stage('Pull Code') {
            steps {
                echo 'Pulling code from git...'
                git branch: 'jenkins-tests', url: 'https://github.com/SachinKn-notes/Playwright-framework.git'
            }
        }
        stage('build') {
            steps {
                echo 'installing node modules...'
                bat 'npm install'
            }
        }
        stage('tests') {
            steps {
                echo 'Running tests...'
                script {
                    bat "npx playwright test --grep @%script%"
                }
            }
        }
    }
    post {
        success {
            echo 'Job Success'
        }
        failure {
            echo 'Job Failure'
        }
        always {
            echo 'Job Finished'
        }
    }

}
