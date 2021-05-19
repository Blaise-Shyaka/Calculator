import magician from '../assets/magician.png';
import * as homeStyles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={homeStyles.home}>
      <div>
        <header>
          <h1>Where Math Magic Happens</h1>
        </header>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
          </p>
        </main>
      </div>
      <aside>
        <img src={magician} alt="Magician Dealing with Numbers" />
      </aside>
    </div>
  );
}
