'use client';

import { useStudent } from "../context/studentcontext";
import Link from "next/link";

const Students = () => {
    const { students, selectStudent } = useStudent();

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Alunos</h1>
            <div className="mt-4">
                {students.map((student) => (
                    <div key={student.id} className="mb-4">
                        <Link
                            href={`/student_data`} // Link para a página do estudante
                            className="block p-4 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() => selectStudent(student.id)} // Seleciona o aluno
                        >
                            <h2 className="text-lg font-semibold">{student.name}</h2>
                            <p className="text-gray-600">@{student.username}</p>
                            <p className="text-sm text-gray-500">{student.email}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Students;
