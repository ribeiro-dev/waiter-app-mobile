import { Modal, Platform } from "react-native";
import { Container, OkButton } from "./styles";
import { CheckCircle } from "../Icons/CheckCircle";
import { Text } from "../Text";
import { StatusBar } from "expo-status-bar";

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  const isAndroid = Platform.OS === 'android';

  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      {!isAndroid && (<StatusBar style="light" />)} {/* changes statusbar in iOS */}

      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#FFF">
          Pedido Confirmado
        </Text>
        <Text color="#FFF" opacity={.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção
        </Text>

        <OkButton onPress={onOk}>
          <Text color="#D73035" weight="600">OK</Text>
        </OkButton>
      </Container>
    </Modal>
  )
}
