import { verificarAcesso } from "@/lib/auth";

export default async function DiretoPage() {
    await verificarAcesso(['diretor']);

    return <h1>Área do Diretor</h1>;
}