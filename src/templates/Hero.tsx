import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

type HeroProps = {
  getRequiredAddress: (address: string) => void;
};

const Hero = (props: HeroProps) => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns
          logo={
            <img
              id="tool"
              src="/assets/images/adrock-logo.png"
              alt="logo"
              width={100}
            />
          }
        >
          <li>
            <Link href="mailto:sweetscottyt@gmail.com">
              <a>Email</a>
            </Link>
          </li>
          <li>
            <Link href="tel:4255918033">
              <a>Call</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-6 pb-16">
        <HeroOneButton
          getRequiredAddress={props.getRequiredAddress}
          title={
            <>
              {'Claim your cash or seller finance\n'}
              <span className="text-primary-500">Offer From Adrock</span>
            </>
          }
        />
      </Section>
    </Background>
  );
};

export { Hero };
