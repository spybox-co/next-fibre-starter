import { cn } from '@/utils/helpers';
// import Section from 'components/Section/Section';

import { Grid } from '@/common-ui/Grid';
import { Button, Leadspace } from '@/common-ui';

import PORTRAIT from './img/portrait_glitch.png';

import styles from './Intro.module.scss';

const leadText = [
  "Experienced Designer",
  "IT Specialist",
  "Art Director & Artist",
  "Usability Lover",
  "Hobbyist Front-end Developer",
  "Just myself!"
]

export default function Intro() {

  const classes = {
    root: cn(styles.section, 'dtm-Hero', 'themed-background'),
    image: cn(styles.image, 'dtm-Hero--image'),
  }

  return(

      <div className={classes.root}>
        <Leadspace 
          heading={
            <>
                <p>Welcome, welcome.</p>
                <p><strong>Everybody</strong> is welcome!</p>
                <p>Take a seat and explore.</p>
            </>
          }
          paragraph={false}
        
        >
          <Content />

        </Leadspace>        
      </div>
  )
}



const Content = () => {

    const classes = {
      image: cn(styles.image, 'dtm-Hero--image'),
      leadText: cn(styles.leadText, 'dtm-Hero--leadText'),
      heading: cn(styles.heading, 'dtm-Hero--leadText--heading'),
    }
  return(
    <>
      <div 
        className={classes.image}
        style={{ 
          backgroundImage: `url(${PORTRAIT})`
        }}
      />
      <div className={classes.leadText}>
        <div className={classes.heading}>
          <h1>Hello,</h1>
          <h2 className="leadText-changer">
            {`I'm`}
            {leadText.map((text, i) => <span key={i}>{text}</span>)}
          </h2>
        </div>
      </div>
    </>
  );
}