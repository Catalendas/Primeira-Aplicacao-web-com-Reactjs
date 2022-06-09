import logoImg from '../../assets/logo.svg'
import { NewTrasectionModal } from '../NewTransectionModal'
import { Container, Content } from './styles'


type HeaderProps = {
    onOpenNewTransectionModal: () => void
}

 export function Header({ onOpenNewTransectionModal }: HeaderProps) {

    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransectionModal}>Nova transação</button>
            </Content> 
        </Container>
    )
}