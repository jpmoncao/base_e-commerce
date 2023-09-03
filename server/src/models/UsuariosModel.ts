class UsuariosModel {
    private usuarios: { id: number; nome: string }[];

    constructor() {
        this.usuarios = [];
    }

    public listarUsuarios(): { id: number; nome: string }[] {
        return this.usuarios;
    }
}

export default UsuariosModel;
