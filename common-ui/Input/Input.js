export default function Input(props) {
  const { 
    active,
    className,
    label,
    description, 
    // To-Do: rename this feature in the component
    inputValue,
    minLength,
    maxLength,
    placeholder,
    value,
    ...other 
  } = props;
  // const { active, value } = this.state;

  const classes = {
    main: [className, 'fbr--input', active && 'active'].join(' ').trim()
  };

  return (
    <div className={classes.main}>
      <div className={`fbr--input__container`}>
        {label ? (
          <label className="fbr--input_label">{label}</label>
        ) : null}
        <input
          className={`fbr--input_textField`}
          minLength={1}
          debounceTimeout={500}
          type="number"
          value={value}
          placeholder={placeholder}
          minlength={minLength}
          maxlength={maxLength}
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