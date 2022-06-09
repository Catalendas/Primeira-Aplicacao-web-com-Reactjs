
import { useTransections } from "../../Hooks/useTransections";

import { Container } from "./styled";



export function TransectionTable() {

    const { transections } = useTransections()
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transections.map(transections => (
                        
                            <tr key={transections.id}>
                                <td>{transections.title}</td>
                                <td className={transections.type}>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transections.amount)}</td>
                                <td>{transections.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transections.createdAt))}</td>
                            </tr>                     
                    ))}                 
                </tbody>
            </table>
        </Container>
    )
}