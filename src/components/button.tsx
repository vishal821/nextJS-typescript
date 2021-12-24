import { Button } from "reactstrap";

function CustomButton(props: any) {
  return (
    <Button
      color="success"
      onClick={() => {
        alert("clicked");
      }}
    >
      {props?.name}
    </Button>
  );
}
export default CustomButton;
