
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation(){
  
  return(<header className={classes.header}>
      <div className={classes.logo}>
          Rihal Challenge
      </div>
      <nav>
          <ul>
              <li>
                <Link to='/'>Statistics</Link>
              </li>
              <li>
                <Link to='/students'>Students</Link>
              </li>
              <li>
                <Link to='/countries'>Countries</Link>
              </li><li>
                <Link to='/classes'>Classes</Link>
              </li>
          </ul>
      </nav>
  </header>);    
  }
  
  export default MainNavigation;