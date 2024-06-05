export default Input(props) {
  const { 
    active,
    label,
    description, 
    // To-Do: rename this feature in the component
    inputValue,
    value,
    ...other 
  } = props;
  // const { active, value } = this.state;

  const classes = {
    main: ['fbr--input', active && 'active'].join(' ').trim();
  };

  const style = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: `5rem`
    },
    description: {
      fontSize: `0.75rem`,
      margin: `0.5rem 0`,
      width: `100%`,
      textAlign: `right`
    }
  };

  return (
    <div className={classes.main} style={style.root}>
      <div className={`fbr--input-container`}>
        {label ? (
          <label className="fbr--input_label">{label}</label>
        ) : null}
        <input
          className={`fbr--input_textField`}
          minLength={1}
          debounceTimeout={500}
          type="number"
          value={value}
          // onFocus={(event) => {
          //   this.setState({ active: true });
          //   event.target.select();
          // }}
          // onBlur={(event) => {
          //   this.setState({ active: false });
          //   this.fixValue(value);
          // }}
          {...other}
        />
        {description ? (
          <div
            className="fbr--input_description"
            style={style.description}
          >
            {description}
          </div>
        ) : null}
      </div>
    </div>
  );