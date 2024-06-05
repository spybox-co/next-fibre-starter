export default function App(props) {
  const {
    children,
    appName
  } = props;
  
  // TODO: name formatter for better vale for css classes selector
  const title = appName.trim();

  const classes = ["App", title].join(" ").trim();

  return (
    <div className={classes}>{children}</div>
  )
}