import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Logo } from "components/avatar";
import { AllSteps } from "components/Steps/allSteps";
import { login } from "store/actions/auth";

Modal.setAppElement("#root");

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(formData, history));
  };

  const { error } = useSelector((state) => state.auth);
  return (
    <section className="w-screen h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-9/12 mx-auto md:w-3/6 xl:w-3/12">
        <div className="flex justify-start w-full mt-5 text-white fill-current">
          <Logo props="h-10 w-10" />
        </div>
        <div className="flex flex-col justify-start w-full mt-5 text-white">
          <h1 className="text-3xl font-bold md:text-4xl">
            Iniciar sesión en Twitter
          </h1>

          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className="flex flex-col mt-5 space-y-6"
          >
            <div className="overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
              <input
                className="w-full py-4 pr-5 mx-2 bg-transparent outline-none"
                placeholder="Correo o usuario"
                name="usernameOrEmail"
                onChange={handleChange}
                type="text"
              />
            </div>
            <div className="overflow-hidden border rounded-sm border-bordes focus-within:border-blue1">
              <input
                className="w-full py-4 pr-5 mx-2 bg-transparent outline-none"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                type="password"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button className="py-3 font-bold rounded-full cursor-pointer bg-blue1">
              Iniciar Sesión
            </button>
          </form>

          <div className="flex justify-between w-5/6 mx-auto mt-5 text-blue1">
            <Link to="/">¿Olvidaste tu contraseña?</Link>
            <span className="text-gray-500 transform scale-150">·</span>
            <div>
              <button onClick={openModal}>Registrate en Twitter</button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-fondo"
                contentLabel="Example Modal"
              >
                <AllSteps />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
