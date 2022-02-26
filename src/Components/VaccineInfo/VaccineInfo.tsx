import { useState } from 'react';
import Box from '../Box';
import vaccineData from './vaccineData';
import './style.css';

const VaccineInfo: React.FunctionComponent = () => {

  // typeof : 변수의 타입을 가져오는 키워드로 타입을 반환함
  // keyof : 타입의 key 값을 가져오느느 키워드
  const [selectedVaccine, setSelectedVaccine] =
    useState<keyof typeof vaccineData>('Pfizer');

  return (
    <Box isPadding>
      <article className="vaccine-info">
        <ul>
          {/* 객체를 key값의 배열로 변경 */}
          {/* vaccineData => [Pfizer, Moderna,,,] 로 변경 */}
          {/* 변경된 key 값의 배열로 백신 탭을 나타냄 */}
          {Object.keys(vaccineData).map((key) => {
            const vaccine = key as keyof typeof vaccineData;
            return (
              <li
                className={selectedVaccine == vaccine ? 'selected' : ''}
                // 백신 탭 클릭시 selectedVaccine의 값을 변경
                onClick={() => setSelectedVaccine(vaccine)}
              >
                {/* 백신의 key 배열로 vaccineData의 name 표시 */}
                {vaccineData[vaccine].name}
              </li>
            );
          })}
        </ul>
        {/* 변경된 selectedVaccine에 따라 선택된 vaccineData의 정보 표시 */}
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
