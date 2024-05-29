import { 
  Grid, 
  Row, 
  Column 
} from 'layout/Grid'

import { 
  Header,
  Menu, 
  Footer 
} from 'modules';

import Container from 'containers/Container'
import Section from 'containers/Section'


import Icon from 'components/Icon'

import {
  Button, 
  IconButton,
  Callout, 
  Card, 
  Embedded,
  ImageCard, 
  Tile,
  Image,
} from 'components'


const RowParapraph = ({ children }) => (
  <Row>
    <p className="Markdown Paragraph">
      {children}
    </p>
  </Row>
);

const components = { 
  h1: heading => <h1 className="Markdown Heading">{heading.children}</h1>,
  h2: heading => <h2 className="Markdown Heading">{heading.children}</h2>,
  p: paragraph => {
    // check if paragraph has children 
    // setTimeout(()=> { console.log(paragraph)}, 100)
    const props = paragraph.children.props
    if (props && props.originalType === 'img' && props.parentName === 'p') {
      return <Image overlaySrc={`${props.src}?auto=compress&cs=tinysrgb&dpr=2&w=5`} src={`${props.src}?auto=compress&cs=tinysrgb&dpr=2&w=5000`} alt={props.alt} />
    }
    if (props && props.originalType === 'a' && props.parentName === 'p') {
      return <a href={props.href}>{props.children}</a>;
    }
    return <p className="Markdown Paragraph">{paragraph.children}</p>;
  },
  Menu,
  Button, 
  IconButton, 
  Callout,
  Card, 
  Embedded,
  ImageCard, 
  Tile, 
  Grid, 
  Row, 
  Column, 
  Image,
  Icon, 
  Container,
  Section,
}

export default components