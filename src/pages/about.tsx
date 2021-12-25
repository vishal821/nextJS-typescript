import { GetServerSideProps, GetStaticProps } from "next";
import withUser from "../hoc/withUser";

interface PeopleProps {
  names: string[];
}

export const getStaticProps: GetStaticProps<PeopleProps> = async (
  context: any
) => {
  return {
    props: { names: ["a", "b", "c", "d", "e", "f"] },
    // revalidate: 1,
  };
};
export const About = (props: any) => {
  console.log("====", props);
  return (
    <>
      <p>This is an people page</p>
      {/* {names.map((ele: any) => {
        return <h1 key={ele}>{ele}</h1>;
      })} */}
    </>
  );
};

export default withUser(About);
