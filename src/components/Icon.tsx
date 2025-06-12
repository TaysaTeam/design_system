import React from "react";
import { Add } from "./Icons/Add";
import { Search } from "./Icons/Search";
import { Remove } from "./Icons/Remove";
import { RemoveRed } from "./Icons/RemoveRed";
import { CornerLine } from "./Icons/CornerLine";
import { IconButton } from "./Icons/IconButton";
import { PenTool } from "./Icons/PenTool";
import { ArrowUp } from "./Icons/ArrowUp";
import { ArrowDown } from "./Icons/ArrowDown";
import { LongCurvedLine } from "./Icons/LongCurvedLine";
import { ShortCurvedLine } from "./Icons/ShortCurvedLine";
import { User_2 } from "./Icons/User_2";
import { Api } from "./Icons/Api";
import { Category } from "./Icons/Category";
import { Calendar_2 } from "./Icons/Calendar_2";
import { People } from "./Icons/People";
import { User_Tick } from "./Icons/User_Tick";
import { Shield_Tick } from "./Icons/Shield_Tick";
import { Document_Text } from "./Icons/Document_Text";
import { Wallet } from "./Icons/Wallet";
import { Sms } from "./Icons/Sms";
import { Sms_Edit } from "./Icons/Sms_Edit";
import { WhatsApp } from "./Icons/WhatsApp";
import { Calling } from "./Icons/Calling";
import { Telegram } from "./Icons/Telegram";
import { Instagram } from "./Icons/Instagram";
import { Email } from "./Icons/Email";
import { Location } from "./Icons/Location";
import { ArrowLeft } from "./Icons/ArrowLeft";

const icons = {
  add: Add,
  search: Search,
  remove: Remove,
  removeRed: RemoveRed,
  cornerline: CornerLine,
  iconButton: IconButton,
  penTool: PenTool,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  user_2: User_2,
  api: Api,
  category: Category,
  calendar_2: Calendar_2,
  wallet: Wallet,
  people: People,
  user_tick: User_Tick,
  shield_tick: Shield_Tick,
  document_text: Document_Text,
  sms: Sms,
  sms_edit: Sms_Edit,
  whatsApp: WhatsApp,
  calling: Calling,
  email: Email,
  location: Location,
  telegram: Telegram,
  instagram: Instagram,
  longCurvedLine: LongCurvedLine,
  shortCurvedLine: ShortCurvedLine,
  arrowLeft: ArrowLeft,
};

export type IconName = keyof typeof icons;

export type IconProps = {
  name: IconName;
  w?: number;
  h?: number;
  color: string;
  onClick?: () => void;
  className?: string;
};

export const Icon: React.FC<IconProps> = ({
  name,
  w,
  h,
  color,
  onClick,
  className,
}) => {
  const IconComponent = icons[name];
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ display: "grid", placeContent: "center" }}
    >
      <IconComponent w={w ?? 24} h={h ?? 24} color={color} />
    </div>
  );
};
