import { useEffect, useState } from 'react';
import Router from 'next/router';

import Head from 'next/head';

import { FaEdit, FaHome, FaStar, FaTimes, FaTrash } from 'react-icons/fa';
import api from '../api/api';
import Swal from 'sweetalert2';

const Admin = () => {
  const [ page, setPage ] = useState('home');
  const [ pageData, setPageData ] = useState({});
  const [ cases, setCases ] = useState([]);

  const [ caseId, setCaseId ] = useState('');
  const [ caseImage, setCaseImage ] = useState('');
  const [ caseName, setCaseName ] = useState('');
  const [ caseResume, setCaseResume ] = useState('');

  const [ showModal, setShowModal ] = useState(false);
  const [ editMode, setEditMode ] = useState(false);
  const [ addMode, setAddMode ] = useState(false);

  async function loadHomeData() {
    await api.get('home').then(({ data }) => {
      setPageData(data[0]);
    }).catch(err => {
      console.error(err);
    });
  }

  async function loadCasesData() {
    await api.get('cases').then(({ data }) => {
      setCases(data);
    }).catch(err => {
      console.error(err);
    });
  }

  async function openModal(caseId, imagePath, name, resume) {
    setCaseId(caseId);
    setCaseImage(imagePath);
    setCaseName(name);
    setCaseResume(resume);
    setShowModal(true);
  }

  async function updateCase() {
    console.log(caseId, caseImage, caseName, caseResume);

    const data = {
      id: caseId,
      image_path: caseImage,
      name: caseName,
      resume: caseResume
    }

    console.log(data);

    await api.put('cases/update', data).then(({ data }) => {
      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Registro atualizado com sucesso!'
      });
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Não foi possível atualizar o registro!'
      });
    });
  }
  
  async function addCase() {
    const data = {
      image_path: caseImage,
      name: caseName,
      resume: caseResume
    }

    await api.put('cases/create', data).then(({ data }) => {
      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Registro criado com sucesso!'
      });
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Não foi possível criar o registro!'
      });
    });
  }

  async function deleteCase() {
    const data = {
      id: caseId
    }

    await api.put('cases/delete', data).then(({ data }) => {
      console.log(data);

      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Registro deletado com sucesso!'
      });
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Não foi possível deletar o registro!'
      });
    });
  }

  useEffect(() => {
    if (!localStorage.getItem('43ca94dd646dbbaa78034918d61043e9')) {
      Router.push('/login');
    }

    loadHomeData();
  }, []);

  return (
    <>
      <Head>
        <title>Administrador - Conecta ERP</title>
      </Head>

      <section id="admin-page">
        <div className="menu">
          <ul>
            <li onClick={ (ev) => { setPage('home'); loadHomeData(); } }>
              <FaHome size={ 22 } />
              Home
            </li>
            <li onClick={ (ev) => { setPage('cases'); loadCasesData(); } }>
              <FaStar size={ 22 } />
              Cases
            </li>
          </ul>
        </div>

        <div className="body">
          <div className="header">
            <h2>{ page.toUpperCase() }</h2>
          </div>

          <div className="page-data">
            {
              page === 'home' &&
              <div id="home">
                <div className="input-block">
                  <label htmlFor="">Título Principal</label>
                  <input type="text" value={ pageData['main_title'] } />
                </div>

                <div className="input-block">
                  <label htmlFor="">Resumo</label>
                  <textarea rows={ 5 } value={ pageData['main_resume'] }></textarea>
                </div>
              </div>
            }

            {
              page === 'cases' &&
              <div id="cases">
                <div className="buttons-operation">
                  <button type="button" onClick={ (ev) => { openModal('', '', '', ''); setAddMode(true); } }>
                    Novo Case
                  </button>
                </div>

                <div className="edit-modal" style={{ visibility: showModal ? 'visible' : 'hidden' }}>
                  <div className="header">
                    <span onClick={ (ev) => { setShowModal(false); setEditMode(false); setAddMode(false); } }>
                      <FaTimes size={ 15 } />
                    </span>
                  </div>

                  <form>
                    <div className="input-block">
                      <label htmlFor="">Nome</label>
                      <input 
                        type="text" 
                        value={ caseName } 
                        onChange={ (ev) => { setCaseName(ev.target.value) } } 
                      />
                    </div>
                    
                    <div className="input-block">
                      <label htmlFor="">Caminho da Imagem</label>
                      <input 
                        type="text" 
                        value={ caseImage } 
                        onChange={ (ev) => { setCaseImage(ev.target.value) } } 
                      />
                    </div>
                    
                    <div className="input-block">
                      <label htmlFor="">Resumo</label>
                      <textarea 
                        rows={ 4 } 
                        value={ caseResume }
                        onChange={ (ev) => { setCaseResume(ev.target.value) } } 
                      ></textarea>
                    </div>
                  </form>

                  <div className="button-container">
                    <button type="button" onClick={ updateCase } style={{ display: editMode ? 'block' : 'none' }}>
                      Atualizar
                    </button>

                    <button type="button" onClick={ addCase } style={{ display: addMode ? 'block' : 'none' }}>
                      Salvar
                    </button>
                  </div>
                </div>

                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Nome</th>
                      <th>Caminho da Imagem</th>
                      <th>Resumo</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      cases.map(({ case_id, image_path, name, resume }) => {
                        return (
                          <tr key={ case_id }>
                            <td style={{ display: 'flex' }}>
                              <button 
                                type="button"
                                className="remove" 
                                value={ case_id } 
                                onClick={ (ev) => { deleteCase(); setCaseId(case_id); } }
                              >
                                <FaTrash />
                              </button>

                              <button 
                                type="button" 
                                className="edit"
                                value={ case_id } 
                                onClick={ (ev) => { openModal(case_id, image_path, name, resume); setEditMode(true); } }
                              >
                                <FaEdit />
                              </button>
                            </td>
                            <td>
                              { name }
                            </td>
                            <td>
                              { image_path }
                            </td>
                            <td>
                              { resume }
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            }
          </div>
        </div>

        <div className="bg-overlay" style={{ visibility: showModal ? 'visible' : 'hidden' }}></div>
      </section>
    </>
  );
}

export default Admin;