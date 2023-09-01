import dotenv from 'dotenv';
import app from "./server";

dotenv.config();

const PORT = process.env.API_PORT || 4000;
const ADDRESS = process.env.API_ADDRESS || 'http://localhost';

app.listen(PORT, () => console.log(`Running: ${ADDRESS}:${PORT}`));
