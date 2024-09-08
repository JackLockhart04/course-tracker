import Link from "next/link";

import MainButtonWrapper from "./mainButtonWrapper";

interface NavigationButtonProps {
  label: string;
  href: string;
}

const NavigationButton = ({ label, href }: NavigationButtonProps) => {
  return (
    <MainButtonWrapper>
      <Link href={href} className="grow flex items-center justify-center">
        <p>{label}</p>
      </Link>
    </MainButtonWrapper>
  );
};

export default NavigationButton;
