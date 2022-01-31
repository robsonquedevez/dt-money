import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import TotalIcon from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
    return (
        <Container>

            <div>
                <header>
                    <p>Income</p>
                    <img src={IncomeIcon} alt="income" />
                </header>
                <strong>
                    $ 1000,00
                </strong>
            </div>

            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeIcon} alt="outcome" />
                </header>
                <strong>
                    - $ 500,00
                </strong>
            </div>

            <div className='hightlight-background' >
                <header>
                    <p>Income</p>
                    <img src={TotalIcon} alt="total" />
                </header>
                <strong>
                    $ 500,00
                </strong>
            </div>

        </Container>        
    );
}