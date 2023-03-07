/* eslint no-unsafe-optional-chaining: "error" */

import { Section } from '../layout/Section';

type ReportProps = {
  reportData: any;
};

const TaxAssessments = (props: any) => {
  const propertyNames: any = Object.keys(props.data);
  const propertyValues: any = Object.values(props.data);
  const getArray = () => {
    // eslint-disable-next-line
    return propertyNames.map((item: any, ind: number) => {
      return (
        <>
          {ind === propertyNames.length - 1 ? (
            <div className={`text-center ${item}`}>
              <h2 className="text-3xl md:text-5xl">
                Estimated Seller Finance:
                <br />
                {`$${(propertyValues[ind]?.value * 1.25).toFixed(0)}`}{' '}
              </h2>
              <br />
              <h2 className="text-3xl md:text-5xl">
                Estimated Cash Offer:
                <br />
                {`$${(propertyValues[ind]?.value * 0.75).toFixed(0)}`}
              </h2>
            </div>
          ) : (
            <></>
          )}
        </>
      );
    });
  };
  return <>{getArray()}</>;
};

const Table = (props: any) => {
  return <>{<TaxAssessments data={props.data.taxAssessment} />}</>;
};

const VerticalFeatures = (props: ReportProps) => {
  return (
    <div id="report">
      {props.reportData?.id && (
        <Section
          title="Your Result"
          description="enter the correct address above for offer!"
        >
          <Table data={props.reportData} />
        </Section>
      )}
    </div>
  );
};

export { VerticalFeatures };
