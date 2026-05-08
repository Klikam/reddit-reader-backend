import express from 'express';
import itemRoutes from './routes/itemRoutes.ts';
import redditRoutes from './routes/redditRoutes.ts';
import { errorHandler } from './middlewares/errorHandler.ts';

const app = express();

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/reddit', redditRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
