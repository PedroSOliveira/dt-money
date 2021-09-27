import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {

useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
}, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">1500,00</td>
            <td>Dev</td>
            <td>10/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">400</td>
            <td>Casa</td>
            <td>10/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
