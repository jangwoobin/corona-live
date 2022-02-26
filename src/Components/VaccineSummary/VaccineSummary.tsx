import { useCallback, useEffect, useState } from 'react';
import { httpGetVaccineSummary } from '../../httpAPI';
import formatNumber from '../../utils/formatNumber';
import Box from '../Box';
import './style.css';

const VaccineSummary: React.FunctionComponent = () => {
  const [vaccineSummary, setVaccineSummary] =
    useState<VaccineSummaryType | null>(null);

  const getVaccineSummary = useCallback(async () => {
    const vaccineSummary = await httpGetVaccineSummary();

    setVaccineSummary(vaccineSummary);
  }, []);

  useEffect(() => {
    getVaccineSummary();
  }, []);

  return (
    <Box isPadding>
      <article className="vaccine-summary">
        <ul>
          <li>
            <dl>
              <dt>1차 접종</dt>
              <dd>
                {formatNumber(vaccineSummary?.vaccine_1.vaccine_1)}
                <span>
                  {formatNumber(vaccineSummary?.vaccine_1.vaccine_1_new)}
                  <span className="material-icons sort-arrow">
                    arrow_upward
                  </span>
                </span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>2차 접종</dt>
              <dd>
                {formatNumber(vaccineSummary?.vaccine_2.vaccine_2)}
                <span>
                  {formatNumber(vaccineSummary?.vaccine_2.vaccine_2_new)}
                  <span className="material-icons sort-arrow">
                    arrow_upward
                  </span>
                </span>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>3차 접종</dt>
              <dd>
                {formatNumber(vaccineSummary?.vaccine_3.vaccine_3)}
                <span>
                  {formatNumber(vaccineSummary?.vaccine_1.vaccine_1_new)}
                  <span className="material-icons sort-arrow">
                    arrow_upward
                  </span>
                </span>
              </dd>
            </dl>
          </li>
        </ul>
      </article>
    </Box>
  );
};
export default VaccineSummary;
