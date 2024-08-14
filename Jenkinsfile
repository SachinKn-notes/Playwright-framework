pipeline {
    agent any
    environment {
        Name = 'Sachi'
        SERVER_CREDENTIALS = credentials('server-cred') // Plugin needed: Credential Binding
    }
    parameters {
        string(name: 'Name', defaultValue: "Sachin")
        choice(name: 'Browser', choices: ['chromium', 'firefox', 'webkit', 'MicrosoftEdge', 'GoogleChrome'])
        choice(name: 'Scripts', choices: ['ID-01', 'ID-02', 'ID-03', '@regression', '@sanity'])
        booleanParam(name: 'Headed', defaultValue: true)
        booleanParam(name: 'Debug', defaultValue: false)
    }
    stages {
        stage('Check') {
            steps {
                echo "env.BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "Name: ${Name}"
                echo "SERVER_CREDENTIALS: ${SERVER_CREDENTIALS}"

                // withCredentials([usernamePassword(credentials: 'server-cred', usernameVariable: USER, passwordVariable: PWD)]) {
                //     sh "USER: ${USER}"
                //     sh "PWD: ${PWD}"
                // }

                script {
                    gv = load 'sample.groovy'
                    gv.test();
                }
            }
        }
        stage('build') {
            // This will work only for Multi Branch Pipeline
            // when {
            //     expression {
            //         env.BRANCH_NAME == "master" || env.BRANCH_NAME == "main"
            //     }
            // }
            steps {
                echo 'Building project'
                bat 'echo Name: %Name%'
                bat 'npm install'
            }
        }
        stage('tests') {
            // This will work only for Multi Branch Pipeline
            // when {
            //     expression {
            //         env.BRANCH_NAME == "master" || env.BRANCH_NAME == "main"
            //     }
            // }
            steps {
                echo 'Running tests'
                script {
                    def headedFlag = params.Headed ? '--headed' : ''
                    def debugFlag = params.Debug ? '--debug' : ''
                    bat "npx playwright test --project=%Browser% ${headedFlag} --grep %Scripts% ${debugFlag}"
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
