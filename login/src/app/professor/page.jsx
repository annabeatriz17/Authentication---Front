import { verificarAcesso } from "@/lib/auth";

export default async function ProfessorPage() {
    await verificarAcesso(['professor']);

    return <h1>Área do Professor</h1>;
}