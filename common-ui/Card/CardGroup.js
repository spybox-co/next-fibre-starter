
import { cn } from 'utils/helpers';
import { Row } from 'layout/Grid';
// import * as styles from './CardGroup.module.scss';



// styles.row

// const Element = () => {

// }

const CardGroup = ({ children, className, asRow, asColumn, ...rest }) => (
  <Row className={cn(className, "CardGroup")} {...rest}>
    {children}
  </Row>
);

export default CardGroup;

CardGroup.defaultProps = {
  asRow: true,
}