import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { Button } from './Button';
import { Heading } from './Heading';
import { NavBarButton } from './NavBarButton';
import { Text } from './Text';

export const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  console.log(mobileMenuIsOpen);
  return (
    <>
      <header className="hidden lg:flex w-full justify-center items-center h-20 gap-24">
        <Image alt="Logo" src="/favicon.svg" width={45} height={45} />
        <nav className="flex gap-5">
          <Text fontWeight={500} size="lg">
            Home
          </Text>
          <Text fontWeight={500} size="lg">
            Menu
          </Text>
          <Text fontWeight={500} size="lg">
            Recompensas
          </Text>
          <Text fontWeight={500} size="lg">
            Gift Cards
          </Text>
          <Text fontWeight={500} size="lg">
            Lojas
          </Text>
        </nav>
        <Button>
          <Text fontWeight={700}> PEGAR MEU CAFÉ</Text>
        </Button>
      </header>
      <div
        className={clsx('flex lg:hidden flex-col', {
          'flex flex-col h-screen absolute w-full bg-black': mobileMenuIsOpen,
        })}
      >
        <header className=" flex justify-between items-center px-5 py-4  border-b border-solid border-menu-mobile">
          <Image alt="Logo" src="/logo-mobile.svg" width={171} height={32} />
          <button onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
            <Image
              alt="ícone de menu fechado"
              src="/menu-closed.svg"
              width={24}
              height={8}
            />
          </button>
        </header>
        <div
          className={clsx(
            'flex flex-col justify-center items-center gap-20 my-20 ',
            { hidden: mobileMenuIsOpen },
          )}
        >
          <Heading
            fontWeight={600}
            level="h2"
            size="lg"
            className="text-center text-white text-3xl max-w-xs px-2"
          >
            O café que fará seu código decolar para o próximo nível.
          </Heading>
          <Button>
            <Text fontWeight={700}> PEGAR MEU CAFÉ</Text>
          </Button>
        </div>
        <nav
          className={clsx({
            'flex flex-col  bg-black': mobileMenuIsOpen,
            hidden: !mobileMenuIsOpen,
          })}
        >
          <NavBarButton>Home</NavBarButton>
          <NavBarButton>Menu</NavBarButton>
          <NavBarButton>Recompensas</NavBarButton>
          <NavBarButton>Gift Cards</NavBarButton>
          <NavBarButton>Lojas</NavBarButton>
        </nav>
      </div>
    </>
  );
};
