import { useEffect, useState } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const [fetchAddress, setFetchAddress] = useState('');
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    fetch(
      `https://realty-mole-property-api.p.rapidapi.com/properties?address=${fetchAddress}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '92c0927a3amshd65f4d92e4522fep1f43dejsn9d7a81d8b912',
          'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com',
        },
      }
    )
      .then((res) => {
        if (res.status !== 404) {
          return res.json();
        }
        return setReportData(null);
      })
      .then((data) => {
        if (typeof data !== 'undefined') {
          setReportData(data[0]);
        }
      });
  }, [fetchAddress]);

  const getRequiredAddress = (address: string) => {
    setFetchAddress(address);
  };

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero getRequiredAddress={getRequiredAddress} />
      <VerticalFeatures reportData={reportData} />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
