import { server } from '@/server';
import dotenv from 'dotenv';
import { setupDatabase } from './database/schema';

dotenv.config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, async () => {
    await setupDatabase();

    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
    console.log('-----------------------------------');
    console.log('Server started successfully');
});