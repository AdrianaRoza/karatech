'user client'

import UserInfo from "@/components/UserInfo";

const Students = () => {
    const dados = [20, 1, 50, 40, 43]
    return(
    
        <div className="">
           Alunos
           {
            dados.map(() => (
             <UserInfo/>
            ))
           }
        </div>
        
    )
}

export default Students;