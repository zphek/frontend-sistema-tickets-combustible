const Remember = () => {
  return (
    <form className="bg-primaryD min-h-screen">
      <div className="flex w-full items-center min-h-screen">
        <div className="w-2/5 flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white text-center">
            ¡Recupera tu cuenta!
          </h1>
          <div className="flex flex-col justify-center items-center mt-10 w-full px-5">
            <label htmlFor="email" className="my-3 text-white lg:w-1/2">
              Correo electrónico
            </label>
            <input
              type="text"
              placeholder="Escribe tu correo electrónico"
              className="secondary-input lg:w-1/2"
              id="email"
            />
            <button className="secondary-button my-4">Enviar</button>

            <a href="" className="text-white text-sm underline hover:no-underline transition-[]">¿Ya tienes una cuenta? Inicia Sesi&oacute;n</a>
          </div>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <img
            src="fuel-dripping.png"
            alt="remember"
            className="max-w-full h-auto"
            style={{ maxWidth: '80%', maxHeight: '80%' }}
          />
        </div>
      </div>
    </form>
  );
};

export default Remember;
