import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import api from '../../pages/api/api';

const Case: React.FC = () => {
  const [ imagePath, setImagePath ] = useState('');
  const [ caseNameParam, setCaseNameParam ] = useState('');
  const [ about, setAbout ] = useState('');
  const [ howHelped, setHowHelped ] = useState('');
  const router = useRouter();

  async function getCaseInfo(caseName) {
    const { data } = await api.get('cases/get', { params: { name: caseName } });
    setImagePath(data[0].image_path);
    setCaseNameParam(data[0].name);
    setAbout(data[0].about);
    setHowHelped(data[0].howhelped);
  }

  useEffect(() => {
    if (router.query.casename) {
      getCaseInfo(router.query.casename.toString());
    }
  }, [router]);

  return (
    <div id="case">
      <div className="client-presentation">
        <img src={ imagePath } alt=""/>

        <p className="resume">
          { about }
        </p>
      </div>

      <div className="how-helped">
        <h2 className="title">
          Como a Conecta ERP contribuiu para o crescimento da { caseNameParam }
        </h2>

        <span className="resume">
          { howHelped }
        </span>
      </div>

      {/* <div className="diferencials">
        <div className="title-container">
          <h2 className="title">
            Principais diferenciais da solução ofertada:
          </h2>
        </div>

        <ul className="list">
          <li>
            <FaCheck color="#520EBC" />
            <span>Otimização de processos de gestão.</span>
          </li>
          <li>
            <FaCheck color="#520EBC" />
            <span>Monitoramento da contabilidade fiscal.</span>
          </li>
          <li>
            <FaCheck color="#520EBC" />
            <span>Organização do planejamento tributário.</span>
          </li>
          <li>
            <FaCheck color="#520EBC" />
            <span>Elaboração de orçamentos e previsões de negócios.</span>
          </li>
          <li>
            <FaCheck color="#520EBC" />
            <span>Elaboração de relatórios para tomada de decisões.</span>
          </li>
          <li>
            <FaCheck color="#520EBC" size={ 45 } />
            <span>Gerenciamento de tesouraria e acompanhamento do departamento financeiro.</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Case;