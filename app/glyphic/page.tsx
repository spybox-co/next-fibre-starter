"use client"

import { useContext } from 'react';

import Link from 'next/link';

import { Header, Main, Footer, Wrapper } from "@/components";
import { CopyNotification } from "@/app/glyphic/components/CopyNotification";
import { GlyphLibrary } from "@/app/glyphic/components/GlyphLibrary";

import { BumperSection, Button, Icon } from "@/common-ui";


import { glyphs } from '@/utils/glyphData';

import './styles.scss';

export default function Home() {

  return (
    <>
      <Header appName="₲L¥₽HI₡" />


      <LeadSpace />
      <Navigation />
      <Main wrapper={true}>
        <GlyphLibrary glyphs={glyphs} />
        <About />
      </Main>
      <BumperSection 
        asLink
        href="#top"
        label="Back to top"
        wrapper
      >
        <h4 className="label responsive-paragraph-02 monoblock">Back to top</h4>
      </BumperSection>
      <Footer appName="₲L¥₽HI₡" />

      <CopyNotification />
  
    </>
  );
}



const LeadSpace = () => {
  return (
    <section>
      <Wrapper className="Leadspace">
        <div className="Leadspace-container column">
          <h1 className="responsive-heading-06 monoblock" tabIndex={0}>
            <div aria-hidden="true" tabIndex={-1}>↘</div>
            Welcome to Glyphic
          </h1>
          <h2 className="responsive-paragraph-03 monoblock" tabIndex={0}>Copy and paste cool symbols</h2>
          {/* <div className="responsive-paragraph-03 monoblock" aria-hidden="true">↓</div> */}
          
        </div>
      </Wrapper>
    </section>
  )
}

const Navigation = () => {
  const items = [
    { link: "#symbols", title: "Browse symbols", icon: "↓" },
    { link: "#about", title: "About", icon: "→"}
  ]
  return (
    <nav id="top" className="Navigation">
      <Wrapper>
        <ul>
          {items.map(item => 
            <li key={item.title}>
              <a className="NavLink" href={item.link} role="button">
                <span className="responsive-paragraph-02 monoblock">{item.title}</span>
                <span className="glyph responsive-paragraph-02 monoblock" aria-hidden="true">{item.icon}</span>
              </a>
            </li>
          )}
          <li>
            <Link href="/" className="NavLink">
              <span className="responsive-paragraph-02 monoblock">Back to Home</span>
              <span className="glyph responsive-paragraph-02 monoblock" aria-hidden="true">←</span>
            </Link>
          </li>
        </ul>
      </Wrapper>
    </nav>
  );
}

const About = () => {
  const description = `Please note that some glyphs may render slightly differently 
  when pasting - or not display at all - depending on the typeface 
  used in your chosen device or application.`


  return(
    <section id="about" className="About">
      {/* <Wrapper> */}
        <div className="section-container">
          <h2 className="responsive-heading-06 monoblock" tabIndex={0}>About</h2>
          <div className="content column">
            <div tabIndex={0}>
              <p className="responsive-paragraph-03 monoblock">
                Glyphic is your one-stop solution for copying glyphs and special characters effortlessly!</p>
              <p className="responsive-paragraph-02">
                Glyphic is a streamlined web application designed to simplify the process of finding and using unique symbols, characters, and glyphs in your projects. 
                Whether you're a designer, developer, writer, or just someone who loves using unique characters, Glyphic is here to make your life easier.
              </p>
            </div>
            
            <div tabIndex={0}>
              <span className="glyph responsive-paragraph-02" aria-hidden="true">{`×`}</span>
              <p aria-label={description} className="responsive-paragraph-02 monoblock">
                
                ₽lea$e №te th₳t some ₲lyph$ may render slightly differently 
                when pasting—or not display at all—depending on the typeface 
                used in your chosen device or application.
              </p>
              <span className="glyph responsive-paragraph-02" aria-hidden="true">{`●`}</span> 
              <p className="responsive-paragraph-02 monoblock">
                
                Enjoy!
              </p>
              <a className="Link" href="#top" role="button">
                <span className="responsive-paragraph-02 monoblock">Back to top</span>
                <span className="glyph responsive-paragraph-02 monoblock" aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </div>
      {/* </Wrapper> */}
    </section>
  );
};