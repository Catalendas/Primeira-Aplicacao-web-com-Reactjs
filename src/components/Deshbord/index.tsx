import { Container } from "./styleds";
import { Summary } from "../Summary";
import { TransectionTable } from "../TransectionTable";


export function Deshbord() {
    return(
        <Container>
            <Summary />
            <TransectionTable />
        </Container>
    )
}