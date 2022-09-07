import express from 'express';
import morgan from 'morgan';
import taskRoutes from './routes/task.routes.js'

const app=express();

import projectRoutes from './routes/projects.routes.js'

app.use(morgan('dev'));
app.use(express.json());

// All the routes
app.use("/api/projects",projectRoutes)
app.use("/api/tasks",taskRoutes)

export default app;