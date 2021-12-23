const InputField = (props:any) => {
    return (
        <label>
          {props?.label}:
          <input type="text" value={props?.value} name={props?.name} />
        </label>

    )
}
export default InputField