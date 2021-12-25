// export const withUser = () => {
//   return (
//     <>
//       <p>With User Details</p>
//     </>
//   );
// };

import React, { ComponentType } from "react";

export interface AdditionalProps {
  additionalProp: string;
}

export function withUser<P extends AdditionalProps>(
  WrappedComponent: ComponentType<P>
): ComponentType<Omit<P, "additionalProp">> {
  const additionalProp = { id: 1, name: "vishal" };
  return (props) => (
    <WrappedComponent additionalProp={additionalProp} {...(props as any)} />
  );
}
export default withUser;
