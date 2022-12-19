import { ButtonContainer, ButtonContainerDisabled } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  if (disabled){
    return <ButtonContainer onClick={onClick} >{title}</ButtonContainer>;
  }else{
    return <ButtonContainerDisabled disabled>{title}</ButtonContainerDisabled>;
  }
};

export default Button;
