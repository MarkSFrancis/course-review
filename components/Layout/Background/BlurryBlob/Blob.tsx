import { FC, ReactText } from "react";

export interface BlobProps {
  fill: string;
  cx: ReactText;
  cy: ReactText;
  r?: ReactText;
}

export const Blob: FC<BlobProps> = (props) => (
  <circle r="101.5" {...props}></circle>
);
