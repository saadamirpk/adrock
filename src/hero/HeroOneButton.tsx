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

  useEffect(() => {
    setAddress(`${house} ${street}, ${city}, ${state}, ${zip}`);
  }, [house, street, city, state, zip]);

  const sendEmail = () => {
    const d = { info: address };
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

  /*
  const bla = async (ad: string) => {
    sendgrid.setApiKey(
      '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'
    );
    const msg = {
      to: 'saadamir.m@gmail.com',
      from: 'sweetscotty@gmail.com',
      subject: 'New Entry on Adrock',
      html: `<p><strong>${ad}</strong></p>`,
    };
    await sendgrid.send(msg);
  };
  */

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
        className="text-sm md:text-2xl mt-8 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl mt-8 mb-2 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl mt-2 mb-8 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="State"
        value={state}
        onChange={(e) => setStatee(e.target.value)}
      />
      <input
        className="text-sm md:text-2xl mt-2 mb-8 w-[90%] md:w-[30%] h-[45px] text-center outline-red-500"
        placeholder="ZIP Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
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
