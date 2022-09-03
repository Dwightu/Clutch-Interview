import express from 'express';
import morgan from 'morgan';

const app=express();

import projectRoutes from './routes/projects.routes.js'

app.use(morgan('dev'));
app.use(express.json());

// All the routes
app.use("/api/projects",projectRoutes)

export default app;