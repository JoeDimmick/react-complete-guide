import reactImg from '../assets/react-core-concepts.png';

export default function Header() {

    const reactDescriptions = ['Fun', 'Crucial', 'Core'];

    function genRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
          <p>
            {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    );
  }