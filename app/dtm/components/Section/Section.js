import { cn } from '@/utils/helpers';
import { Grid, Row, Column } from '@/common-ui/Grid';
import { Card } from '@/common-ui';

import styles from './Section.module.scss'

const defaultTheme = ""


/*
    @SEE ALSO: scrollable section
    https://bitbucket.org/dominicom/kiepuszewski-com/src/develop/src/components/ScrollableSection/ScrollableSection.js

*/

export default function Section(props) {
  const { 
    id,
    children, 
    hero, 
    theme 
  } = props

  const classes = {
    root: cn(styles.module, 'fbr--grid', theme && theme || defaultTheme), // , 'fbr--grid','Block-container', 'container', theme && theme || defaultTheme
  }

  let SectionHero;
  if (hero) {
    SectionHero = (
      <Row className="Section-hero">
        <Column col={8} colSm={4} colMd={4} colLg={6}>
          <h1>
            Work Work Work
          </h1>
          <p className="ExpressiveParagraph">
          
              We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. 
              If you{`’`}re interested in contributing, check out our contributing guidelines to get started.
            
          </p> 
        </Column>
        <Column col={4} colSm={4} colMd={4} colLg={6}>
          <Card
            title="See all work"
            href="/portfolio"
            subtitle={false}
            // col={4} colSm={2} colMd={4} colLg={4}
            ratio="2x1"
          >
            <p>Explore more work and all my portfolio and enjoy it!</p>
          </Card>
        </Column>
      </Row>
    )

  }


  return(
    <section id={id} className={classes.root}>
      {/* <Grid theme={theme}> */}
        {SectionHero}
        {children}
      {/* </Grid> */}
    </section>
  )
}