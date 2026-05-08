import express, { type Express } from 'express';
import redditRoutes from './routes/redditRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { requestLogger } from './middlewares/logger.js';

const app: Express = express();

app.use(express.json());

// Logger -> must be before routes
app.use(requestLogger);

// Routes
app.use('/api/reddit', redditRoutes);

// Global error handler -> must be after routes
app.use(errorHandler);

export default app;
