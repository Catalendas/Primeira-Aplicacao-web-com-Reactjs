import Modal from 'react-modal'
import { Container, TransectioTypeContainer, RadioBox } from './styled'
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState} from 'react';
import { useTransections } from '../../Hooks/useTransections';



type NewTransectionModalProps = {
    isOpen: boolean
    onRequestClose: () => void
}

export function NewTrasectionModal({ isOpen, onRequestClose } : NewTransectionModalProps) {

  const  {createTransection } = useTransections()

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransection(event: FormEvent) {
    event.preventDefault();

  await createTransection({
     title,
     amount,
     category,
     type,
   })
    
   setTitle('')
   setAmount(0)
   setCategory('')
   setType('deposit')
   onRequestClose()
  }

    return(
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
      >
        <button type=
        "button" 
        onClick={onRequestClose} 
        className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransection}>

          <h1>Cadastrar transação</h1>

          <input  
            placeholder='Titulo' 
            value={title} 
            onChange={event => setTitle(event.target.value)} 
          />

          <input  
            placeholder='Valor' 
            type="number"
            value={amount} 
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransectioTypeContainer>

            <RadioBox 
              type='button'   
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              colorActive="green"
            >

              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>

            </RadioBox>

            <RadioBox
              type='button' 
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              colorActive="red"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>

          </TransectioTypeContainer>

          <input 
            placeholder='Categoria'   
            value={category} 
            onChange={event => setCategory(event.target.value)}
          />

          <button type='submit'>Cadastrar</button>
        </Container>      
      </Modal>
    )
}