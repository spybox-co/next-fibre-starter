import { cn } from '@/utils/helpers';
import { Row } from '@/common-ui/Grid';

const defaultTheme = ""

export default function Container(props) {
  const { children, hero, theme } = props
  const classes = cn('Block-container', 'container', theme && theme || defaultTheme)
  return(
    <Row className={classes}>
      {children}
    </Row>
  )
}