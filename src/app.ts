import express from 'express';
import itemRoutes from './routes/itemRoutes.ts';
import redditRoutes from './routes/redditRoutes.ts';
import { errorHandler } from './middlewares/errorHandler.ts';
import { requestLogger } from './middlewares/logger.ts';

const app = express();

app.use(express.json());

// Logger -> must be before routes
app.use(requestLogger);

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/reddit', redditRoutes);

// Global error handler -> must be after routes
app.use(errorHandler);

export default app;
