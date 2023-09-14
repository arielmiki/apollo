pipeline {
   agent any

   environment {
     // You must set the following environment variables
     // ORGANIZATION_NAME
     // YOUR_DOCKERHUB_USERNAME (it doesn't matter if you don't have one)

     REGISTRY_HOST = "http://localhost:5000"
     SERVICE_NAME = "apollo"
     IMAGE_NAME = "arielmiki/${SERVICE_NAME}"
     IMAGE_TAG = "${GIT_REVISION,length=8}"
   }

   stages {
       stage('Initialize'){
            steps {
                script {
                    def dockerHome = tool 'docker-builder'
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                }
            }
        }
        
      stage('Clone Repository') {
        steps {
            checkout scm
        }
      }

      stage('Build Docker Image') {
        steps {
            script {
                app = docker.build("${IMAGE_NAME}")
            }
        }   
      }

      stage ('Push Image') {
        steps {
            script {
                docker.withRegistry("${REGISTRY_HOST}") {
                    app.push("${IMAGE_TAG}")
                    app.push("latest")
                }
            }
        }
      }

    //   stage('Deploy to Cluster') {
    //       steps {
    //         sh 'envsubst < ${WORKSPACE}/deploy/deployment.yaml | kubectl apply -f -'
    //       }
    //   }

    //   stage('Notify') {
    //     steps {
    //       discordSend description: "Jenkins Pipeline Build", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/1033315263225004143/IwRFaL20IT0U2_MkLJjoSSXUoQYkT77T1WGu7y6WR1GgyePWnIA7e08zvuIft_wGVF3N"
    //     }
    //   }
   }
}