import { ReactNode, useState } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';

type IHeroOneButtonProps = {
  title: ReactNode;
  placeholder: string;
  getRequiredAddress: (address: string) => void;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const [address, setAddress] = useState('');

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <input
        className="text-2xl mt-8 mb-16 w-[80%] h-[45px] text-center outline-red-500"
        placeholder={props.placeholder}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Link href={address.length > 0 ? '#report' : '#'}>
        <a
          onClick={() => {
            if (address.length === 0) {
              alert('Insert Address in the Input Field');
            } else {
              props.getRequiredAddress(address);
            }
          }}
        >
          <Button xl>Get Started Now</Button>
        </a>
      </Link>
    </header>
  );
};

export { HeroOneButton };
