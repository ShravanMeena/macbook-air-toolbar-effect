import { data } from "../../data";
import { IconBox, Icon } from "./BottomNavigation.style";

export default function IconCompo({ container }) {
  const Container = container ? IconBox : Icon;
  return (
    <>
      {data.map((icon, index) => {
        return (
          <Container key={index}>
            <icon.icon />
          </Container>
        );
      })}
    </>
  );
}
