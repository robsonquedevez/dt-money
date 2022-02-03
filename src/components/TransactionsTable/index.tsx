import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container } from './styles';


type ITransactions = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: Date;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<ITransactions[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type} >$ {transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </Container>
    );
}