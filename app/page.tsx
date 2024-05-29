import Image from "next/image";
import styles from "./page.module.css";

import { Button } from "@/common-ui";
// import { Link } from "@/common-ui";

// import { Link as NextLink } from 'next/link';
import Link from 'next/link';

import { Header, Main, Footer, Wrapper } from "@/components";


export default function Home() {

  return (
    <>
      <Header />
    
      <Main wrapper>
        <Wrapper>


          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
        </Wrapper>
        <Wrapper>
          {/* <NextLink href="/glyphic">GLYPHIC App</NextLink> */}
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/glyphic">GLYPHIC App</Link>
            </li>
          </ul>
        </Wrapper>  
        <Wrapper>
          <div>
            <Button kind="primary" renderIcon="ExternalLink">Click me!</Button>
            <Button renderIcon="arrow-up">Click me!</Button>
            <Button anchor to='https://www.kiepuszewski.com' renderIcon="external-link">Click me!</Button>
            {/* <Link href='https://www.kiepuszewski.com'>ExternalLink</Link> */}
            
          </div>

          <div className={styles.grid}>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>→</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Docs <span>→</span>
              </h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Learn <span>→</span>
              </h2>
              <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Templates <span>→</span>
              </h2>
              <p>Explore starter templates for Next.js.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
                Deploy <span>→</span>
              </h2>
              <p>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
              </p>
            </a>
          </div>
        </Wrapper>
      </Main>

      <Footer />
    </>
  );
}


const DesccriptionElement = () => {
  return (
    <div className={styles.description}>
      <p>
        Get started by editing&nbsp;
        <code className={styles.code}>app/page.tsx</code>
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
}