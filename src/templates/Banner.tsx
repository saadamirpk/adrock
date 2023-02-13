import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Simplify Your Taxes with Our Cutting-Edge Tax Tool!"
      subtitle="Start Saving Time and Money Today"
      button={
        <Link href="#tool">
          <a>
            <Button>Try It Now!</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
