import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()}{' '}
    {`${AppConfig.site_name} ${AppConfig.title}`}. <br /> Powered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    Made by{' '}
    <a
      href="https://linkedin.com/in/saad-amir"
      target="_blank"
      rel="noreferrer"
    >
      Saad Amir
    </a>
    {/*
     * PLEASE READ THIS SECTION
     * We'll really appreciate if you could have a link to our website
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * Thank you for your support it'll mean a lot for us.
     */}
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
