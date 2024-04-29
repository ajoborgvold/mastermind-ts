import { FC } from "react";
import { HeaderProps } from "../interfaces/interfaces";

const Header: FC<HeaderProps> = ({children, flexStyle}) => {
  return (
    <header className={`flex p-2 sm:p-4 ${flexStyle}`}>
      {children}
    </header>
  )
}

export default Header