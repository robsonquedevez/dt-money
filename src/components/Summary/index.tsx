import { useTransactions } from '../../hooks/useTransactions';

import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import TotalIcon from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <Container>

            <div>
                <header>
                    <p>Income</p>
                    <img src={IncomeIcon} alt="income" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(summary.deposit)
                    }
                </strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeIcon} alt="outcome" />
                </header>
                <strong>
                    - 
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(summary.withdraw)
                    }
                </strong>
            </div>

            <div className='hightlight-background' >
                <header>
                    <p>Income</p>
                    <img src={TotalIcon} alt="total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(summary.total)
                    }
                </strong>
            </div>

        </Container>        
    );
}