# portfolio

## About
The goal of this is to gain some practical experience at CI/CD implementation in AWS.

## Build vue app 
1. Go to vue folder
    ```sh
    cd web 
    ```
2. Install dependencies
    ```sh
    npm install
    ```
3. Build project
    ```sh
    npm run build
    ```
## Build production image
```sh
docker build web.Dockerfile
```