/* groovylint-disable CompileStatic, LineLength, NestedBlockDepth, NoDef, VariableTypeRequired */
pipeline {
  agent any

  environment {
    REGISTRY_HOST = 'http://localhost:5000'
    SERVICE_NAME = 'apollo'
    IMAGE_NAME = "arielmiki/${SERVICE_NAME}"
    IMAGE_TAG = "${GIT_COMMIT[0..7]}"
    KUBERNETES_IMAGE = "registry.arielmiki.com/${IMAGE_NAME}:${IMAGE_TAG}"
  }

  stages {
    stage('Initialize') {
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
          app = docker.build("${IMAGE_NAME}", '--no-cache .')
            }
        }
      }

      stage('Push Image') {
        steps {
            script {
              docker.withRegistry("${REGISTRY_HOST}") {
                app.push("${IMAGE_TAG}")
                app.push('latest')
              }
            }
        }
      }

      stage('Deploy to Cluster') {
        steps {
          withKubeConfig([credentialsId: 'kubeconfig']) {
            sh "kubectl set image deployment/${SERVICE_NAME} ${SERVICE_NAME}=${KUBERNETES_IMAGE}"
          }
        }
      }
  }

  post('Notify') {
    always {
      discordSend description: "Jenkins Pipeline Build: ${BUILD_URL}", result: currentBuild.currentResult, title: JOB_NAME, webhookURL: 'https://discord.com/api/webhooks/1154397409569423392/7W8FH-7u1QXanX4mWG_CXgmPWtW9_db3Rqjs9st3aWkPLdwL1gYgXQeG8csjnj95AoCa'
    }
  }
}
