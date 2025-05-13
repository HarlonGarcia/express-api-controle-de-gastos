import { server } from '@/server';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
    console.log('-----------------------------------');
    console.log('Server started successfully');
});