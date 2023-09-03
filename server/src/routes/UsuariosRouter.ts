// src/routes/ApiRouter.ts

import { Router } from 'express';
import UsuariosController from '../controllers/UsuariosController';

class UsuariosRouter {
    public router: Router;
    private usuarioController = new UsuariosController();

    constructor() {
        this.router = Router();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.usuarioController.listar);
    }
}

export default UsuariosRouter;
