import Image from "next/image";
// import styles from "./page.module.css";

import { Button, BumperSection, Link, Card, Callout, ImageCard, StaticTile } from '@/common-ui';
import { Header, Main, Footer } from '@/components';
import { Section } from '@/app/dtm/components';
import { Grid, Column, Row } from '@/common-ui/Grid';


// import Link from 'next/link';





import { Wrapper } from '@/components';

export default function Home() {

  return (
    <>
      {/* <Header appName="dtm" /> */}
    
      <Main>
        <Wrapper>
        </Wrapper>


        <Callout 
          heading={`Designer × Developer`}
          paragraph={
            <>
                Creative <strong>Multi-disciplinary Graphic Designer</strong> with 15+ years{`’`} professional experience in print digital media. 
                Almost 10-years{`’`} professional approach and experience in information technology branch, interactive and advertising, 
                communication and marketing. Experienced in various roles in graphic design{`—`}team member and independent specialist, 
                participated and worked on many corporate projects, long-term B2B solutions and services located on all over the world.
            </>
          }
        >
          <Button
            kind="primary"
            renderIcon="ArrowDown"
          >        
            Static page with hash (good)
          </Button>

          <Button kind="secondary" renderIcon />

          <Button renderIcon="ExternalLink">Click me!</Button> 

        </Callout>


        <Section id="work">
        {/* <Row className="styles.workLead">
          <Column col={2} colSm={2} colMd={2} colLg={2}>
            <Hyphens.Work />
          </Column>
          <Column col={2} colSm={2} colMd={2} colLg={2}>
            <Hyphens.Work />
          </Column>
          <Column col={2} colSm={2} colMd={2} colLg={2}>
            <Hyphens.Work />
          </Column>
          <Column col={2} colSm={2} colMd={2} colLg={2}>
            <Hyphens.Work />
          </Column>
        </Row> */}
        <Row>
          <Column col={4} colSm={4} colMd={8} colLg={4} empty />
          <Column col={8} colSm={4} colMd={4} colLg={8}>
            <p className="ExpressiveParagraph">
            
                We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. 
                If you{`’`}re interested in contributing, check out our contributing guidelines to get started.
              
            </p> 
          </Column>
          {/* <Column col={4} colSm={4} colMd={4} colLg={4}>
            <Card
              title="See all work"
              href="/portfolio"
              subtitle={false}
              
              // col={4} colSm={2} colMd={4} colLg={4}
              ratio="2x1"
            >
              <p>Explore more work and all my portfolio and enjoy it!</p>
            </Card>
          </Column> */}
        </Row>

        
        
        <Row>
          <ImageCard col={4} colMd={8} colLg={4} image="https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=3295&auto=format&fit=crop" ratio="1x1" dark />
          <ImageCard col={4} image="https://images.unsplash.com/photo-1497500002367-5eabaa373843?q=80&w=2944&auto=format&fit=crop" ratio="2x1" dark />
          <Column col={4} colMd={8} colLg={4} noGutter>
            <Card ratio="2x1" noGutter dark />
            <ImageCard ratio="1x1" image="https://images.unsplash.com/photo-1584457021185-49623a766992?q=80&w=2931&auto=format&fit=crop" />
          </Column>
        </Row>

        <Row>
          <Column col={4} colMd={4} colLg={4} noGutter>
            <BumperSection block="nearest" row={false} />
          </Column>
        </Row>
        
        <Row>
          <BumperSection block="nearest">
            <StaticTile col={4} colMd={8} colLg={4}>
            <p className="ExpressiveParagraph">
              
              We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. 
              If you{`’`}re interested in contributing, check out our contributing guidelines to get started.
            
            </p> 

            </StaticTile>

            <Column col={4} colSm={4} colMd={4} colLg={4}>
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
          </BumperSection>
        </Row>

        <Row>
          <BumperSection block="nearest"/>
        </Row>

        <Row>
          <Column col={4} colMd={8} colLg={4} noGutter>
            <Card ratio="2x1" dark />
            <Card ratio="2x1" dark />
          </Column>
          
          <Card ratio="2x1" col={8} colMd={8} colLg={4} dark noGutter />

          <StaticTile col={4} colMd={8} colLg={4} ratio>
            <p className="ExpressiveParagraph-02" style={{ fontSize: '7.5vw' }}>Some Text here →</p> 
          </StaticTile>
          


          <Column col={4} colMd={4} colLg={4} noGutter>
            <Card ratio="1x1" dark />
            <Card ratio="2x1" dark />
          </Column>

          

          <Column col={4} colMd={4} colLg={4} noGutter>
            <Card ratio="1x2" dark />
          </Column>

          <Column col={4} colMd={8} colLg={4} noGutter>
            <Card ratio="2x1" dark />
            <Card ratio="1x1" dark />
          </Column>

          <Card ratio="4x3" col={8} colMd={8} colLg={8} noGutter dark/>
        </Row>
        
      </Section>


        <Wrapper>
          <div>
            <Button hasOnlyIcon kind="primary" renderIcon="arrow-up" />
            <Button hasOnlyIcon renderIcon="arrow-up" />
            <Button label="Click me!" renderIcon="arrow-up" />
            <Button kind="primary" renderIcon="ExternalLink">Click me!</Button>
            <Button renderIcon="arrow-up">Click me!</Button>
            <Button anchor to='https://www.kiepuszewski.com' renderIcon="external-link">Click me!</Button>
            {/* <Link href='https://www.kiepuszewski.com'>ExternalLink</Link> */}
            
          </div>

          
        </Wrapper>
      </Main>
    </>
  );
}
