import { Request, Response } from 'express';
import { sendResponse } from 'src/utils/response';

// Model
import UsuariosModel from 'src/models/UsuariosModel';

class UsuariosController {
    private Usuarios: UsuariosModel;

    constructor() {
        this.Usuarios = new UsuariosModel();
    }

    public listar(req: Request, res: Response): void {
        try {
            const usuarios = this.Usuarios.listarUsuarios()

            sendResponse(res, true, usuarios, 'Usuários listado com sucesso!');
        } catch (exception) {
            console.error('UC1.\nERRO: ' + exception)
            sendResponse(res, false, null, 'Erro ao listar usuários: ' + exception);
        }
    }
}

export default UsuariosController;
