# This application is made using vite framework for react using javascript.
# Instruction to setup vite :
1 - npm create vite@latest <project_name>
2 - cd project_name
3 - npm install
4 - npm run dev

Deploying on netlify and Vercel can produce build failure because of dependency version mismatch, which can be resolved by creating the environment variable in 
netlify by :
Environment variable name : NPM_FLAGS
Environment variable value : --legacy-peer-deps

A screenshot build_failure_screenshot.png is added under public folder to set the environment key and value in netlify.
