import { HTMLAttributes, PropsWithChildren } from "react";

type FlexProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function Flex({
  style,
  ...props
}: FlexProps & {
  direction?: "row" | "column";
}) {
  return (
    <div
      {...props}
      style={{
        ...style,
        display: "flex",
        flexDirection: props.direction ?? "row",
      }}
    ></div>
  );
}

function Item({ style, ...props }: FlexProps) {
  return (
    <div
      {...props}
      style={{
        ...style,
        flex: 1,
      }}
    ></div>
  );
}

export default Object.assign(Flex, { Item });
