import { useEffect, useState } from "react";
import "./App.css";
import videoBack from "./assets/back-video.mp4";
import logoProjectRDC from './assets/icon-rdc.jpg'
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } else {
          if (activeSection === entry.target.id) {
            setActiveSection("");
          }
        }
      });
    }, options);

    const aboutSection = document.getElementById("sobre");
    const skillsSection = document.getElementById("habilidades");
    const projectsSection = document.getElementById("projetos");
    const contatoSection = document.getElementById("contato");

    if (aboutSection) observer.observe(aboutSection);
    if (skillsSection) observer.observe(skillsSection);
    if (projectsSection) observer.observe(projectsSection);
    if (contatoSection) observer.observe(contatoSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
      if (skillsSection) observer.unobserve(skillsSection);
      if (projectsSection) observer.unobserve(projectsSection);
      if (contatoSection) observer.unobserve(contatoSection);
    };
  }, [activeSection]);

  return (
    <main className="relative bg-black">
      <nav className="navbar !px-20 flex w-full justify-between items-center h-16 bg-transparent backdrop-blur-md fixed top-0 left-0 z-[100]">
        <a
          href="/"
          className="font-primary text-3xl font-bold text-white cursor-pointer hover:text-4xl transition-all duration-300"
        >
          pr.
        </a>
        <ul className="flex gap-7 text-white">
          <li
            className={`navbar-item ${
              activeSection === "sobre" ? "active" : ""
            }`}
          >
            <a href="#sobre">Sobre</a>
          </li>
          <li
            className={`navbar-item ${
              activeSection === "habilidades" ? "active" : ""
            }`}
          >
            <a href="#habilidades">Habilidades</a>
          </li>
          <li
            className={`navbar-item ${
              activeSection === "projetos" ? "active" : ""
            }`}
          >
            <a href="#projetos">Projetos</a>
          </li>
          <li
            className={`navbar-item ${
              activeSection === "contato" ? "active" : ""
            }`}
          >
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </nav>

      <section className="w-full !h-screen relative">
        <video
          src={videoBack}
          className="w-full h-full object-cover absolute top-0 left-0"
          autoPlay
          loop
          muted
        />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-black opacity-90 z-10 flex justify-center items-center">
          <div className=" flex flex-col w-3/4">
            <h1 className="title font-primary text-white font-bold text-[150px] tracking-wider">
              PEDRO REZENDE
            </h1>
            <h2 className="subtitle font-primary text-white font-bold text-6xl h-20 tracking-widest">
              <Typewriter
                words={["Developer", "Front-End", "Back-End", "RESTful API`s"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
          </div>

          <div className="social-icons flex flex-col w-1/4 gap-4 justify-center items-end text-white">
            <a
              href="https://www.instagram.com/plreezz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon
                name="logo-instagram"
                className="icon text-6xl transition-all duration-300 hover:text-gray-300 hover:text-7xl"
              ></ion-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-lucas-rezende-59a867319"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon
                name="logo-linkedin"
                className="icon text-6xl transition-all duration-300 hover:text-gray-300 hover:text-7xl"
              ></ion-icon>
            </a>
            <a
              href="https://github.com/Plr3z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon
                name="logo-github"
                className="icon text-6xl transition-all duration-300 hover:text-gray-300 hover:text-7xl"
              ></ion-icon>
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="py-20 px-10 w-full !h-auto bg-black flex flex-col md:flex-row"
        data-aos="fade-up"
      >
        <div className="br flex justify-center items-center w-full h-full md:w-1/2  md:h-full border-t-2 border-white">
          <h1 className="logo text-white text-[100px] md:text-[200px] font-bold font-primary">
            pr.
          </h1>
        </div>

        <div className="bl flex justify-center items-center w-full h-full md:w-1/2 md:h-full border-b-2 border-white">
          <div className="left-me flex w-full h-full flex-col justify-center items-center">
            <h1 className="title text-white text-4xl md:text-5xl font-bold font-primary text-center">
              SOBRE MIM
            </h1>
            <p className="rigth-me font-primary text-white text-xl md:text-2xl mt-8 text-center px-4">
              Desenvolvedor Júnior com experiência em soluções web escaláveis
              usando React.js, Tailwind CSS, Node.js, Python e Golang.
              Especializado em APIs, microsserviços e cloud (AWS, Docker), com
              foco em eficiência e segurança. Destaque para o aplicativo
              educacional sobre a RDC 216/2004 da ANVISA, desenvolvido em
              parceria com o IFTM. Cursando Gestão da Informação na UFU,
              buscando constantemente novos desafios para criar soluções
              inovadoras.
            </p>
          </div>
        </div>
      </section>


      <section
        id="habilidades"
        className=" w-full !h-auto bg-black flex flex-col items-center justify-center"
        data-aos="fade-right"
      >
        <h1 className="text-white text-5xl font-bold font-primary !mb-10">
          HABILIDADES
        </h1>
        <div className="icons-sec flex flex-wrap gap-10 items-center justify-center mt-10">
          <i className="icon fab fa-react text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
          <i className="icon fab fa-node-js text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
          <i className="icon fab fa-docker text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
          <i className="icon fa-brands fa-aws text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
          <i className="icon fab fa-python text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
          <i className="icon fa-brands fa-golang text-white text-9xl hover:text-[160px] transition-all duration-300"></i>
        </div>
      </section>

      <section
        id="projetos"
        className=" w-full !h-auto bg-black flex flex-col items-center justify-center"
        data-aos="fade-down"
      >
        <h1 className=" text-white text-5xl font-bold font-primary !my-10">
              PROJETOS
        </h1>
        <div className="menu flex flex-col items-center justify-center w-7/12 h-full rounded-3xl px-20 py-10">
          <div className="card-menu linha w-full h-full flex flex-col items-center justify-center border-l-4 rounded-2xl border-white py-10">
            
            <div className="card flex items-center justify-center w-full h-1/2 px-30"> 
              <div className="w-1/2 h-full flex items-center justify-center" >
                <img src={logoProjectRDC} alt="" srcset="" width={200} className="rounded-xl" />
              </div>

              <div className="w-1/2 h-full flex flex-col items-center justify-center " >
                <h2 className="subtitle text-2xl font-bold text-center text-white">RESOLUÇÃO RDC 216/2004 - EDUCACIONAL</h2>
                <p className="paragraph text-white text-center">App feito em parceira com o IFTM, desenvolvido com React-Native e NodeJS sobre a RDC 216/2004 da ANVISA facilita o acesso a normas sanitárias para serviços de alimentação, oferecendo conteúdo didático e interativo para profissionais e estudantes.</p>
              </div>
            </div>
            
            <a
              href="https://github.com/Plr3z/api-node-login"
              className="card flex items-center justify-center w-full h-1/4 px-20 !my-5 cursor-pointer transition-transform duration-300 hover:scale-105"
            > 
              <div className="border border-white text-white flex flex-col items-start justify-center rounded-2xl w-full h-full !p-4 transition-all duration-300 hover:bg-white hover:text-black">
                <h2 className="subtitle text-2xl font-bold !mb-2">API Login - Nodejs | Prisma</h2>
                <p className="paragraph">
                  Uma API de login em Node.js permite autenticação segura, utilizando bcrypt para hash de senhas e Prisma para gerenciar usuários no banco SQL. Ela valida credenciais e retorna respostas apropriadas, garantindo segurança e fácil manutenção.
                </p>
              </div>
            </a>

            <a href="https://github.com/Plr3z/connection-api-react" className="card flex items-center justify-center w-full h-1/4 px-20 !my-5 cursor-pointer transition-transform duration-300 hover:scale-105"> 
              <div className="border border-white text-white flex flex-col items-start justify-center rounded-2xl w-full h-full !p-4 transition-all duration-300 hover:bg-white hover:text-black">
                <h2 className="subtitle text-2xl font-bold !mb-2">Connection API - React | Axios</h2>
                <p className="paragraph">Um site feito com React consome uma API via Axios para exibir e gerenciar dados dinamicamente. Com uma interface interativa e responsiva, ele oferece uma experiência fluida ao usuário, garantindo rapidez e eficiência na comunicação com o backend.</p>
              </div>
            </a>



          </div>
        </div>
      </section>

      <section
        id="contato"
        className="px-40 w-full h-auto bg-black flex items-center justify-center"
        data-aos="fade-left"
      >
        <div className="container-sec flex flex-col justify-center items-start w-1/2 h-full ">
          <h1 className="text-white text-5xl font-bold font-primary">
            ENTRE EM CONTATO
          </h1>
          <p className="font-primary text-white text-lg  text-center">
            Quer dar um upgrade no seu négocio? Me mande uma mensagem...
          </p>
          <div className=" infos flex w-full items-center justify-start h-4 !my-8 ">
            <i className="fa-solid fa-phone text-white text-2xl !mr-7"></i>
            <div className="flex flex-col">
              <p className="font-primary text-white text-lg  text-center">
                +55 (34) 99632-2177
              </p>
            </div>
          </div>

          <div className="infos flex w-full items-center justify-start h-4 !my-8 ">
            <i className="fa-solid fa-envelope text-white text-2xl !mr-7"></i>
            <div className="flex flex-col">
              <p className="font-primary text-white text-lg  text-center">
                plrezende02@gmail.com
              </p>

              <p className="font-primary text-white text-lg  text-center">
                plrezende00@gmail.com
              </p>
            </div>
          </div>

          <div className="infos flex w-full items-start justify-start h-4 !my-8 ">
            <i className="fa-solid fa-location-dot text-white text-2xl !mr-7"></i>
            <div className="flex flex-col">
              <p className="font-primary text-white text-lg  text-center">
                Uberlândia, Minas Gerais (MG) - Brasil
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col justify-center items-center w-1/2 h-full">
          <input
            className="font-primary bg-white !p-8 w-2/4 h-4 !my-8 rounded-2xl outline-none"
            type="text"
            name=""
            id=""
            placeholder="Nome"
          />
          <input
            className="font-primary bg-white !p-8 w-2/4 h-4 !mb-8 rounded-2xl outline-none"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <textarea
            className="font-primary bg-white !p-8 w-2/4 h-32 rounded-2xl !mb-8 outline-none"
            name=""
            id=""
            placeholder="Digite sua mensagem..."
          ></textarea>
          <input
            className="border-2 border-white rounded-xl w-2/4 h-12 font-primary text-white cursor-pointer outline-none hover:bg-white hover:text-black transition-all duration-300"
            type="submit"
            value="Enviar mensagem ..."
            placeholder=""
          />
        </form>
      </section>
    </main>
  );
}

export default App;
