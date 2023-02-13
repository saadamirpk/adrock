import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

type ReportProps = {
  reportData: any;
};

const TaxAssessments = (props: any) => {
  const propertyNames: any = Object.keys(props.data);
  const propertyValues: any = Object.values(props.data);
  const getArray = () => {
    return propertyNames.map((item: any, ind: number) => {
      return (
        <tr key={item}>
          <td scope="row" data-label="Tax Assessment">
            Tax Assessment {item}
          </td>
          <td data-label="Data">{`Value: $${propertyValues[ind]?.value}`}</td>
          <td data-label="Other">
            {`Improvements: $${propertyValues[ind]?.improvements}`}
            <br />
            {`Land: $${propertyValues[ind]?.land}`}
          </td>
        </tr>
      );
    });
  };
  return <>{getArray()}</>;
};

const PropertyTaxes = (props: any) => {
  const propertyNames: any = Object.keys(props.data);
  const propertyValues: any = Object.values(props.data);
  const getArray = () => {
    return propertyNames.map((item: any, ind: number) => {
      return (
        <tr key={item}>
          <td scope="row" data-label="Property Tax">
            Property Tax {item}
          </td>
          <td data-label="Data">${propertyValues[ind]?.total}</td>
          <td data-label="Other">-</td>
        </tr>
      );
    });
  };
  return <>{getArray()}</>;
};

const Table = (props: any) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Feature</th>
          <th scope="col">Data</th>
          <th scope="col">Other</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Year Built">Year Built</td>
          <td data-label="Data">{props.data.yearBuilt}</td>
          <td data-label="Other">-</td>
        </tr>
        <tr>
          <td scope="row" data-label="SquareFoot">
            SquareFoot
          </td>
          <td data-label="Data">{props.data.squareFootage}</td>
          <td data-label="Other">-</td>
        </tr>
        <tr>
          <td scope="row" data-label="Bathrooms">
            Bathrooms
          </td>
          <td data-label="Data">{props.data.bathrooms}</td>
          <td data-label="Other">-</td>
        </tr>
        <tr>
          <td scope="row" data-label="Bedrooms">
            Bedrooms
          </td>
          <td data-label="Data">{props.data.bedrooms}</td>
          <td data-label="Other">-</td>
        </tr>
        <tr>
          <td scope="row" data-label="ZipCode">
            ZipCode
          </td>
          <td data-label="Data">{props.data.zipCode}</td>
          <td data-label="Other">-</td>
        </tr>
        {<PropertyTaxes data={props.data.propertyTaxes} />}
        {<TaxAssessments data={props.data.taxAssessment} />}
      </tbody>
    </table>
  );
};

const VerticalFeatures = (props: ReportProps) => (
  <Section
    title="Your Report"
    description={
      props.reportData?.id
        ? `${props.reportData?.id}`
        : 'enter the correct address above for report!'
    }
  >
    {props.reportData?.id && <Table data={props.reportData} />}
    <VerticalFeatureRow
      title="Address Lookup"
      description="The tool allows users to enter an address and retrieve information about the property. This is a crucial feature as it enables the user to access the specific information they need without having to go through a complicated search process. After entering the address, the tool should be able to accurately locate the property and provide the relevant information."
      image="/assets/images/feature.png"
      imageAlt="Address Lookup"
    />
    <VerticalFeatureRow
      title="Tax Assessment Value"
      description="The tool provides an estimated value of the property based on the tax assessment data. This value is used to determine the amount of property tax that the owner must pay. The assessment is usually performed by a government agency and takes into account various factors such as the property's location, size, age, and any improvements made to it. The tool should be able to provide an up-to-date and accurate estimate of the property's value, which can be useful for property owners when negotiating property tax payments or appealing an assessment."
      image="/assets/images/feature2.png"
      imageAlt="Tax Assessment Value"
      reverse
    />
    <VerticalFeatureRow
      title="Property Information"
      description="The tool displays information about the property, including the address, property type, square footage, year built, and number of bedrooms and bathrooms. This information is crucial for anyone interested in buying, selling, or renting a property. The tool should provide a comprehensive and easy-to-understand summary of the property's characteristics, allowing users to quickly make informed decisions about the property's suitability for their needs. The information should also be regularly updated to ensure accuracy and reflect any changes to the property over time."
      image="/assets/images/feature3.png"
      imageAlt="Property Information"
    />
  </Section>
);

export { VerticalFeatures };
