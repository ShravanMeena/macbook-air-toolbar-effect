import { BottomNavigation, Header, Modal } from "../../components";
import { Wrapper } from "./home.style";

export default function index() {
  return (
    <Wrapper>
      <Header />
      <Modal transform={-50} />
      <BottomNavigation />
    </Wrapper>
  );
}
