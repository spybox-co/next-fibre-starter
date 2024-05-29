import { settings } from '@/utils/data';

import { Wrapper } from "@/components";
import './Masthead.scss';


export const Masthead = () => {

  return (
    <header className="Masthead" role="banner" aria-hidden="true">
      <Wrapper>
        <div className="Masthead-container">
          <div className="Heading AppName">
            <div className="responsive-heading-06">{settings.appName}</div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
