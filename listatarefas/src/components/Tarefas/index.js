import React from "react";
import {FaEdit, FaWindowClose} from 'react-icons/fa';


export default function Tarefas({tarefas, handleEdit, handleDelete}){
    return(
<ul className="tarefas">
    {tarefas.map((tarefa, index) => (
        <li key={tarefa}>{tarefa}
        <div>
            <FaEdit onClick={(e)=> handleEdit(e, index)} className="edit"/>
            <FaWindowClose onClick={(e)=> handleDelete(e, index)} className="delete"/>
        </div>
        </li>
))}
</ul>
    )
}


