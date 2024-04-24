import { HeaderProps } from "../interfaces/interfaces";

export default function Header({children, flexStyle}: HeaderProps): JSX.Element {
  return (
    <header className={`flex p-2 sm:p-4 ${flexStyle}`}>
      {children}
    </header>
  )
}