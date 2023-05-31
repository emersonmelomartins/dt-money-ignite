import * as Dialog from "@radix-ui/react-dialog";
import logoSvg from "../../assets/logo.svg";
import { NewTransactionModal } from "./NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton type="button">
              Nova Transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
