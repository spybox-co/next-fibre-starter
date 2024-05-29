import { Glyph } from '@/app-components/Glyph';
import { Wrapper } from '@/components';

import './GlyphLibrary.scss';

export const GlyphLibrary = (props) => {
  const { glyphs } = props;

  return (
    <section className="Gallery-module" id="symbols" tabindex="0" aria-label="Gallery of symbols and font glyphs">
      {/* <Wrapper> */}
      <div className="Glyphs-module">
        <ul className="glyph-library" tabindex="0" aria-label="Find and select glyph, click to copy one to clipboard">
          {glyphs && glyphs.map((glyph, i) => (
            <li key={i} className="Card aspect-ratio-1-1">
              <div className="Card-inside">
                <div className="Card-object">
                  <Glyph glyph={glyph} index={i} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* </Wrapper> */}
    </section>
  );
};

