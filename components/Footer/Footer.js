import { settings } from '@/utils/data';

import { Wrapper } from "@/components";

import { ArabicToRoman } from '@/utils/helpers.js';

import './Footer.scss';

const date = new Date().getFullYear();

const romanDate = () => {
  return ArabicToRoman(date);
}

export const Footer = ({ name }) => (
  <footer className="Footer" tabindex="0">
    <Wrapper>
      <div className="Footer-container">
        <p className="productive-paragraph-02 monoblock">
          {settings.appName || name}
        </p>
        <p aria-label={`Copyright ${date}`}>{`© ${romanDate()}`}</p>
        <br />
        <p>
          <strong aria-hidden="true">I d I ™</strong> DOMINIK KIEPUSZEWSKI
        </p>
        <p aria-hidden="true">° ENJOY</p>
        <span className="date" aria-hidden="true">{date}</span>
      </div>
    </Wrapper>
  </footer>
);
