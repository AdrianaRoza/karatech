'use client' // Garante que este é um componente do lado do cliente


import { createContext,useContext,useState, ReactNode,  } from "react" 

// Defina a estrutura do estudante
interface Student{
    
    id: Number;
    name: String;
    username: String;
    email: String;
    techniques: any[];
}

// Defina o tipo do contexto
interface StudentContextType {

    students: Student[];
    selectedStudent: Student | null;
    selectStudent: ( id: Number ) => void;
}


// Criação do contexto
const StudentContext = createContext<StudentContextType | undefined> (undefined);


// Componente provedor que envolve a árvore de componentes
export const StudentProvider = ( {children}: { children: ReactNode }) => {
    const [students] = useState<Student[]>([

			{
				id: 1,
				name: "Adriana Roza Benites",
				username: "Adriana",
				email: "adriana.roza.aka@gmail.com",
				techniques: [],
			},
			{
				id: 2,
				name: "João Silva",
				username: "joao_silva",
				email: "joao.silva@gmail.com",
				techniques: [],
			},
    ])

		const [selectedStudent,setSelectedStudent] = useState<Student | null>(students[0]);
		

		// Função para selecionar o aluno
		const selectStudent = (id: Number ) => {
			const student = students.find((s) => s.id === id) || null;
			setSelectedStudent(student);
		}

		return(
			<StudentContext.Provider value={{students, selectedStudent, selectStudent }}>
				{children}
			</StudentContext.Provider>
		)
	}

	// Hook para acessar o contexto
	export const useStudent = () => {
		const context = useContext(StudentContext);
		if (!context) {
			throw new Error("useStudent must be used within a StudentProvider");
	}
	return context;
	}