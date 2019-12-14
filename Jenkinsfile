pipeline {
agent {
docker {
image 'node:6-alpine'
args '-p 80:80'
}
}
environment {
CI = 'true'
}
stages {
stage('Build') {
steps {
sh 'npm install'
}
}
stage('Linting') {
steps {
sh 'npm install eslint --save-dev'
sh './node_modules/.bin/eslint --init'
sh './node_modules/.bin/eslint file.js'
}
}
stage('Test') {
sh 'npm install mocha'
sh './node_modules/mocha/bin/mocha'
}
}
}
