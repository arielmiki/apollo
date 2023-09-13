pipeline {
   agent any

   environment {
     // You must set the following environment variables
     // ORGANIZATION_NAME
     // YOUR_DOCKERHUB_USERNAME (it doesn't matter if you don't have one)

     REGISTRY_HOST = "registry:5000"
     SERVICE_NAME = "apollo"
     IMAGE_NAME = "arielmiki/${SERVICE_NAME}"
     REPOSITORY_TAG = "${REGISTRY_HOST}/${IMAGE_NAME}:${BUILD_ID}"
   }

   stages {
      stage('Clone Repository') {
        steps {
            checkout scm
        }
      }

      stage('Build Docker Image') {
        steps {
            sh "docker build -t ${REPOSITORY_TAG} . --no-cache"
        }   
      }

      stage ('Push Image') {
        steps {
             sh "docker image push ${REPOSITORY_TAG}"
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