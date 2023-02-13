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
      <h1 className="text-3xl md:text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <input
        className="text-sm md:text-2xl mt-8 mb-8 w-[90%] md:w-[80%] h-[45px] text-center outline-red-500"
        placeholder={props.placeholder}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <p className="text-xs md:text-sm mb-16 opacity-50">
        example 5500 Grand Lake Dr, San Antonio, TX, 78244
      </p>
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
