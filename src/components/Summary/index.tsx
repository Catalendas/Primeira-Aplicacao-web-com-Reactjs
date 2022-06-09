
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg" ;
import totalImg from "../../assets/total.svg";
import { useTransections } from "../../Hooks/useTransections";


import { Container } from "./styled";

export function Summary() {

    const { transections } = useTransections()

    // const totalDeposits = transections.reduce((acc, transection) =>{
    //     if(transection.type == 'deposit') {
    //         return acc + transection.amount
    //     }

    //     return acc
    // }, 0)

    const summary = transections.reduce((acc, transection) => {
        if(transection.type == 'deposit') {
            acc.deposit += transection.amount
            acc.total += transection.amount
        } else {
            acc.withdraws += transection.amount
            acc.total -= transection.amount
        }

        return acc
    }, {
        deposit: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.deposit)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>

                <strong>- {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>

                <strong>{new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}