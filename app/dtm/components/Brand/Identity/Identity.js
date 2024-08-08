import { cn } from '@/utils/helpers';
import Logo from '../Logo'
import { Do, Mi, Nik, Kie, Pusz, Ewski } from './vectors.js'

import styles from './Identity.module.scss';

export const Dmark = ({ fulfilled }) => {
  return (
    <div
      className={cn("dtm-Logo", styles.root, !fulfilled ? "rest" : "active")}
      href="/" 
      type="anchor"
      overlayed={fulfilled}
    >
      <div className="logo-box">
        <Logo.Dominicom />
      </div>
        {/* <div className={`logo-gradient ${state}`}></div>
      <div style={{ position: 'absolute', width: 60, height: 60, top: 0, left: 0, background: 'none' }}></div> */}

    </div>
  )
}


export const NameMark = () => {

  return (
    <div className="dtm-PersonaLogo">
      <div className="Name">
        <Do /><Mi /><Nik />
      </div>
      <div className="Surname">
        <Kie /><Pusz /><Ewski />
      </div>
    </div>
  )
}




