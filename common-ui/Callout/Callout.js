import { cn } from 'utils/helpers'
import { Grid, Row, Column } from 'layout'

// import { Button, Card } from 'components'

import styles from './Callout.module.scss'

export default function Callout(props) {
  const { children, heading, paragraph, theme } = props


  const column = {
    left: {
      col: 4, 
      colSm: 4,
      colMd: 4, 
      colLg: 4,
    },
    right: {
      col: 8, 
      colSm: 4,
      colMd: 4, 
      colLg: 8,
    }
  }

  const classes = {
    root: cn(styles.module, 'Callout'),
    // container: cn('Callout-container', 'Block-container', 'container', theme && theme || defaultTheme),
    container: 'Callout-container',
    leftColumn: 'Callout-left-column',
    rightColumn: 'Callout-right-column',
    heading: cn(styles.heading,'Callout-heading'),
    paragraph: cn(styles.parapgragh, 'Callout-paragraph', 'ExpressiveParagraph')
  }
  // className={styles.root}
  return(
    <Grid className={classes.root} theme={theme}> 
      <Row className={classes.container}>
        <Column className={classes.leftColumn} {...column.left}> 
          <h3 className={styles.heading}>
            {heading}
          </h3>

        </Column>

        <Column className={classes.rightColumn} {...column.right}>
          <p className={classes.paragraph}>
            {paragraph}
          </p>

        </Column>
      </Row>

      <Row className="--custom-space--">
        <Column {...column.left} empty />
        <Column {...column.right}>
          {/* <Card ratio="2x1" dark />
          <Card ratio="2x1" dark /> */}

          {children}
        </Column>
      </Row>
    </Grid>
  )
}

const dummyText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`

Callout.defaultProps = {
  theme: "",
  heading: `Edit heading and title text`,
  paragraph: dummyText,
}


