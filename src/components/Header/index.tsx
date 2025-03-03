import { Text } from "../Text";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <Text size={14}>Bem vindo(a) ao</Text>
      <Text size={24} weight={700}>
        WAITER
        <Text size={24}>APP</Text>
      </Text>
    </Container>
  )
}
