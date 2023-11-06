/* eslint-disable react-refresh/only-export-components */
import { FC } from "react";
import withInnerWidth from "./withInnerWidth";

type Props = {
  innerWidth: number
}

const MyComponent: FC<Props> = ({ innerWidth }) => <div>innerWidth: {innerWidth}</div>

export default withInnerWidth(MyComponent)