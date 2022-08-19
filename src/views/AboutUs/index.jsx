import './AboutUs.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function AboutUs() {

  return (
    <>
      <h1 className='PageTitle'>Nuestro equipo de trabajo</h1>
      <div className="TeamDiv">
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Mariana Stocco</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MarianaStocco">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mariana-stocco-36525726/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Joaquín Angelino Corona</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/JoaquinAngelino">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joaquin-angelino-corona/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Martín Araujo</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MNAHEAVY">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/martin-araujo-3ab8a7189/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Roger miño</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/roger077">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/roger-mi%C3%B1o-a36813219/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Kevin David Gutiérrez</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/David-G18">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-david-%C3%A1lvarez-guti%C3%A9rrez-b4ba13241/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Veronica Valdivia</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/valdiviavv">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/veronica-vazquez-valdivia-249238128">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img src="" alt="" />
          <p>Pablo Spector</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/PabloElectricista">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pablo-spector-69b814229/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}