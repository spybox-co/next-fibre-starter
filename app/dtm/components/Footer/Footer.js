import { Grid, Row, Column } from '@/common-ui/Grid';
import { ArabicToRoman } from '@/utils/helpers.js';


import Logo from '../Brand/Logo';

import './Footer.scss';

const date = new Date().getFullYear();

const romanDate = () => {
  return ArabicToRoman(date);
}

export const Footer = ({ appName }) => (
  <footer className="Footer" tabIndex={0}>
    <div className="Footer-container">
      <Grid>
        <Row>
          <Column className="Footer-column" col={3}>
            <Logo.Dominicom />
          </Column>
          <Column className="Footer-column">
            <h4 className="productive-paragraph-01 monoblock">Content</h4>
            <ul>
              {`/* content here */`}
            </ul>
          </Column>
        </Row>
        <Row>
          <Column className="Footer-column">
            <p>
              <strong aria-hidden="true">I d I ™</strong> DOMINIK KIEPUSZEWSKI
            </p>
            <p aria-label={`Copyright ${date}`}>{`© ${romanDate()}`}</p>
            <p aria-hidden="true">° ENJOY</p>
          </Column>
        </Row>
        
        
          

        
      </Grid>
    </div>
  </footer>
);
