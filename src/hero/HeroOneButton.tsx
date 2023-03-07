import { ReactNode, useEffect, useState } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';

type IHeroOneButtonProps = {
  title: ReactNode;
  getRequiredAddress: (address: string) => void;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
  const [address, setAddress] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setStatee] = useState('');
  const [zip, setZip] = useState('');
  const [name, setName] = useState('');
  const [cell, setCell] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setAddress(`${house} ${street}, ${city}, ${state}, ${zip}`);
  }, [house, street, city, state, zip]);

  const sendEmail = () => {
    const d = {
      info: address,
      person: `${name}, Call: ${cell}, Email: ${email}`,
    };
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(d),
    }).then((res) => {
      console.log(res);
      if (res.status !== 200) {
        console.log('Email failed!');
      }
    });
  };

  const addressisok = () => {
    if (
      house.length === 0 ||
      street.length === 0 ||
      city.length === 0 ||
      state.length === 0 ||
      zip.length === 0 ||
      name.length === 0 ||
      cell.length === 0 ||
      email.length === 0
    ) {
      return false;
    }
    return true;
  };

  return (
    <header className="text-center">
      <h1 className="text-3xl md:text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <input
        className="text-sm md:text-2xl mt-8 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="House Number"
        value={house}
        onChange={(e) => setHouse(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-8 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-8 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-2 mb-2 md:mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="State"
        value={state}
        onChange={(e) => setStatee(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-2 md:mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="ZIP Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />
      <br />
      <input
        className="text-sm md:text-2xl mt-2 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-2 mb-2 md:mb-8 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="Contact Num"
        value={cell}
        onChange={(e) => setCell(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl md:mt-2 mb-8 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="Your Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="text-xs md:text-sm mb-16 opacity-50">
        example 5500 Grand Lake Dr, San Antonio, TX, 78244
      </p>
      <Link href={addressisok() ? '#report' : '#'}>
        <a
          onClick={() => {
            if (!addressisok()) {
              alert('Please Fill the details');
            } else {
              props.getRequiredAddress(address);
              sendEmail();
            }
          }}
        >
          <Button xl>Claim Offer</Button>
        </a>
      </Link>
    </header>
  );
};

export { HeroOneButton };
