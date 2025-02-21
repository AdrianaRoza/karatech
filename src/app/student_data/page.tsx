'use client';

import { useStudent } from "../context/studentcontext";

const Student_data = () =>{
    const {selectedStudent} = useStudent();

    if (!selectedStudent) {
        return <p className="text-red-500">Nenhum Aluno Selecionado</p>
    }

    return (
        <div className="text-black p-4">
            <h2 className="text-xl font-bold">Dados do Aluno</h2>
            <p>
              <strong>Nome:</strong>
							{selectedStudent.name} 
            </p>

						<p>
							<strong>Usuário:</strong>
							{selectedStudent.username}
						</p>

						<p>
							<strong>Email:</strong>
							{selectedStudent.email}
						</p>
        </div>
    )
}

export default Student_data;


