import { Container } from './styles';

export function TransactionsTable() {
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
                    <tr>
                        <td>Website developed</td>
                        <td className='deposit' >$ 12.000</td>
                        <td>Development</td>
                        <td>05/05/2021</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className='withdraw'>- $ 1.120</td>
                        <td>Home</td>
                        <td>12/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}