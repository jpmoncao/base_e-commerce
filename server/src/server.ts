// Dependências
import express, { Express } from "express";
import cors from 'cors';
import dotenv from 'dotenv';
// Rotas
import UsuariosRouter from "./routes/UsuariosRouter";

class App {
    public app: Express;
    private PORT: string;
    private ADDRESS: string;

    constructor() {
        // Importa as variáveis de ambiente
        dotenv.config();
        // this.PORT = process.env.API_PORT || '4000';
        this.PORT = '40032';
        this.ADDRESS = process.env.API_ADDRESS || 'http://localhost';

        // Cria instância do Express.js
        this.app = express();

        // Usa os middlewares
        this.app.use(express.json());
        this.app.use(cors());
    }

    init() {
        // Usa a rota de usuários
        const usuariosRouter = new UsuariosRouter().router;
        this.app.use('/usuarios', usuariosRouter)

        // Cria um interpretador na porta definida
        this.app.listen(this.PORT, () => console.log(`Running: ${this.ADDRESS}:${this.PORT}`));
    }
}

export default App;