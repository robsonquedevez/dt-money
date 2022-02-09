import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeIcon from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {
    Container,
    TransactionsTypesContainer,
    RadioBox
} from './styles';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ 
    isOpen,
    onRequestClose
 }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');

        onRequestClose();
    }

    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
        >
            <button 
                type='button'  
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeIcon} alt="close modal" />
            </button>   

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Trasanction register</h2>

                <input 
                    type="text" 
                    placeholder='Title' 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number" 
                    placeholder='Value' 
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionsTypesContainer>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        isActiveColor='green'
                    >
                        <img src={incomeImg} alt="income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        isActiveColor='red'
                    >
                        <img src={outcomeImg} alt="outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionsTypesContainer>

                <input 
                    type="text" 
                    placeholder='Category'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Register
                </button>

            </Container>
        </Modal>
    );
}