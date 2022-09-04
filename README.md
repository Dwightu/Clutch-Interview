# Clutch Interview
Some cheat sheets for Clutch interview.

## Create REST APIs using sequences from scratch.
1. Project Structure
```bash
.
├── package.json
└── src
    ├── index.js
    ├── app.js
    ├── controllers
    │   ├── project.controller.js
    ├── database
    │   └── database.js
    ├── models
    │   ├── Project.js
    └── routes
        ├── projects.routes.js
├── docker-compose.yaml
├── Dockerfile
├── .dockerignore

```

2. Create `database.js`(Important)
```
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "rest", // db name,
  "postgres", // username
  "postgres", // password
  {
    host: "localhost",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
```
<a href="https://sequelize.org/docs/v6/getting-started/">Connection Doc Link</a>

3. Start NodeJS and Postgres in Docker<br>
Why? Because it's easy to tear town and clean up.

4. Sync<br>
```
await sequelize.sync();
```

5. Create models for tables

<a href="https://sequelize.org/docs/v6/core-concepts/model-basics/">Model Basics Doc</a>


## Why docker?
1. Easy to Setup on different machine
2. Microservice

<br>Useful Docker Instructions
1. docker-compose
```
docker-compose up --build -d
docker-compose down
```
2. cd docker postgres
```
docker exec -it node-server psql -U postgres
```

3. build a docker image manually and run it
```
docker build . --tag node-server
docker run -p 5000:5000 -d node-server
docker stop node-server -t 0
docker rm node-server
```

4. cd docker bash
```
docker exec -it node-server bash
```

5. List running docker image
```
docker ps
```

6. pull a image
```
docker pull node
```


## What I need to improve?
1. Jest Unit Test
2. Complicated tables
