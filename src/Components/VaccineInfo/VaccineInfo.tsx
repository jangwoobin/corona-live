import { useState } from 'react';
import Box from '../Box';
import vaccineData from './vaccineData';
import './style.css';

const VaccineInfo: React.FunctionComponent = () => {
  const [selectedVaccine, setSelectedVaccine] =
    useState<keyof typeof vaccineData>('Pfizer');

  return (
    <Box isPadding>
      <article className="vaccine-info">
        <ul>
          {Object.keys(vaccineData).map((key) => {
            const vaccine = key as keyof typeof vaccineData;
            return (
              <li
                className={selectedVaccine == vaccine ? 'selected' : ''}
                onClick={() => setSelectedVaccine(vaccine)}
              >
                {vaccineData[vaccine].name}
              </li>
            );
          })}
        </ul>
        <div className="vaccine-data">
          <dl>
            <dt>개발국</dt>
            <dd>{vaccineData[selectedVaccine].country}</dd>
          </dl>
          <dl>
            <dt>수량</dt>
            <dd>{vaccineData[selectedVaccine].volume}</dd>
          </dl>
          <dl>
            <dt>접종횟수</dt>
            <dd>{vaccineData[selectedVaccine].count}</dd>
          </dl>
          <dl>
            <dt>접종간격</dt>
            <dd>{vaccineData[selectedVaccine].interval}</dd>
          </dl>
          <dl>
            <dt>보관</dt>
            <dd>{vaccineData[selectedVaccine].keep}</dd>
          </dl>
          <dl>
            <dt>유통</dt>
            <dd>{vaccineData[selectedVaccine].distribution}</dd>
          </dl>
        </div>
      </article>
    </Box>
  );
};

export default VaccineInfo;
