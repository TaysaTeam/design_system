import { Icon, IconName } from "../Icon";

type LabelColor =
  | "brand"
  | "green"
  | "teal"
  | "blue-dark"
  | "violet"
  | "fuchsia"
  | "pink"
  | "rose"
  | "orange"
  | "yellow";
type LabelVariant = "fill" | "outline";
type LabelSize = "small" | "medium" | "large";

export type LabelProps = {
  children: React.ReactNode;
  color?: LabelColor;
  variant?: LabelVariant;
  size?: LabelSize;
  className?: string;
  icon?: IconName;
}