import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../slices/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    console.log('Updated user:', user);

    // If there's a user, navigate to the dashboard.
    if (user) {
      navigate('/dashboard');
    }

  }, [user, navigate]); // Notice I've added `navigate` to the dependency array.



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
      navigate('/dashboard'); // redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error);
    }
  };


  return (
    <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src={process.env.PUBLIC_URL + 'wellness.png'}
                        style={{width: "185px"}} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Wellness & Health</h4>
                    </div>

                    <form style={{ width: '23rem' }} onSubmit={handleSubmit}>
                      <p>Ingresa a tu cuenta</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label className="form-label">Correo</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example28"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <label className="form-label">Contrase&ntilde;a</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                          Inicio de Sesi&oacute;n
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Ingenier&iacute;a de Datos e IA</h4>
                    <p className="small mb-5">Wellness & Health es una plataforma que se encarga de leer y analizar datos encontrados en el dataset:.</p>
                    <p className="small mb-0">
                      <a href="https://www.kaggle.com/datasets/thedevastator/school-student-health-and-wellbeing" className="btn btn-outline-info">
                        School Student Health and Wellbeing
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
