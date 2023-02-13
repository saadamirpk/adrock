import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type HeroProps = {
  getRequiredAddress: (address: string) => void;
};

const Hero = (props: HeroProps) => {
  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          {/**
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
        */}
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          getRequiredAddress={props.getRequiredAddress}
          title={
            <>
              {'Discover the True Value of Your Property\n'}
              <span className="text-primary-500">Tax Assessment Tool</span>
            </>
          }
          placeholder="Simply enter your property address and get an instant, accurate report."
        />
      </Section>
    </Background>
  );
};

export { Hero };
