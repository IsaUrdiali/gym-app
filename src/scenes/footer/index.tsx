import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Trabalho Final para a matéria de Desenvolvimento Para Dispositivos Móveis de Isabella Urdiali Miranda - GU3046451 
            e Maria Fernanda Barreto dos Anjos - GU32256362. 
          </p>
          <p>© Evogym Todos os Direitos Reservados.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">IFSP GRU</p>
          <p className="my-5">MOBILE</p>
          <p>TYPESCRIPT</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contate-nos</h4>
          <p className="my-5">Fizemos o nosso máximo prof, avalie com carinho.</p>
          <p>(11)90425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
