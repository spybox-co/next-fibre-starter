export default function Input(props) {
  const { 
    active,
    className,
    label,
    description, 
    // To-Do: rename this feature in the component
    inputValue,
    minLength = 2,
    maxLength,
    placeholder,
    value,
    ...other 
  } = props;
  // const { active, value } = this.state;

  const classes = {
    main: [className, 'fbr--input', active && 'active'].join(' ').trim(),
    container: 'fbr--input__container',
    label: 'fbr--input__label',
    textField: 'fbr--input__textField'
  };

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {label ? (
          <label className={classes.label}>{label}</label>
        ) : null}
        <input
          className={classes.textField}
          type="number"
          value={value}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
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
}