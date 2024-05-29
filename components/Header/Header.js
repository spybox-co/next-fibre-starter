import { settings } from '@/utils/data';

import { Wrapper } from "@/components";
import './Header.scss';


export const Header = () => {

  return (
    <header className="Header" role="banner" aria-hidden="true">
      <Wrapper>
        <div className="Header-container">
          <div className="logo">
            <div aria-label="Glyphic" className="responsive-heading-04 monoblock">{settings.appName}</div>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
