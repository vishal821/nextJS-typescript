const InputField = (props: any) => {
  return (
    <label>
      {props?.label}:
      <input
        type="text"
        value={props?.value}
        name={props?.name}
        required={props?.required}
      />
    </label>
  );
};
export default InputField;
