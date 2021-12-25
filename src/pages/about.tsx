import { GetServerSideProps, GetStaticProps } from "next";
import withUser from "../hoc/withUser";

interface PeopleProps {
  names: string[];
}

export const getServerSideProps: GetServerSideProps<PeopleProps> = async (
  context: any
) => {
  console.log(context?.req);
  return {
    props: { names: ["a", "b", "c", "d", "e", "f"] },
    // revalidate: 1,
  };
};
export const About = (props: any) => {
  return (
    <>
      <p>This is an people page</p>
      {props?.names.map((ele: any) => {
        return <h1 key={ele}>{ele}</h1>;
      })}
    </>
  );
};

export default withUser(About);
