import React from "react";
import { StyledDisplay } from "./Display.styles";

type Props = {
  gameover?: boolean;
  text: string;
};
const Display: React.FC<Props> = ({ gameover, text }) => (
  <StyledDisplay gameover={gameover}>{text}</StyledDisplay>
);

export default Display;
