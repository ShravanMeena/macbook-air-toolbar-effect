import { ModalWrapper } from "./BottomNavigation.style";
import Icon from "./Icon";

export default function Modal(props) {
  return (
    <ModalWrapper transform={props.transform}>
      <Icon container={true} />
    </ModalWrapper>
  );
}
