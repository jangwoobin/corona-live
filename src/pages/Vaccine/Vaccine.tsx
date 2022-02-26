import VaccineInfo from '../../Components/VaccineInfo';
import VaccineSummary from '../../Components/VaccineSummary';

const Vaccine: React.FunctionComponent = () => {
  return (
    <>
      <VaccineSummary />
      <VaccineInfo />
    </>
  );
};

export default Vaccine;
