import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

import {
  ArrowDownUpIcon,
  Bell,
  CalendarIcon,
  CheckIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronUp,
  Cloud,
  CreditCard,
  CrossIcon,
  EditIcon,
  EllipsisVerticalIcon,
  Eye,
  EyeOff,
  ImageIcon,
  LayoutDashboard,
  ListOrderedIcon,
  LogOutIcon,
  MailPlusIcon,
  MoonIcon,
  NewspaperIcon,
  Package2Icon,
  PlusCircleIcon,
  SearchIcon,
  Settings2Icon,
  ShoppingBagIcon,
  SquareSplitHorizontalIcon,
  StarsIcon,
  SunIcon,
  Table,
  Trash,
  UserCircle,
  UserPenIcon,
  UserPlusIcon,
  UsersIcon,
  ViewIcon,
  XIcon,
  HashIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  UserIcon,
  CalendarDaysIcon,
  BoxIcon,
  WarehouseIcon,
  PaperclipIcon,
  DockIcon,
  TruckIcon
} from "lucide-react";
import file from "./svg/file.svg";
import github from "./svg/github.svg";
import globe from "./svg/globe.svg";
import google from "./svg/google.svg";
import microsoft from "./svg/microsoft.svg";
import window from "./svg/window.svg";

const IconList = {
  google,
  microsoft,
  github,
  globe,
  file,
  window,
  eye: Eye,
  eyeOff: EyeOff,
  trash: Trash,
  cloud: Cloud,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  layoutDashboard: LayoutDashboard,
  listOrderedIcon: ListOrderedIcon,
  newspaperIcon: NewspaperIcon,
  userCircle: UserCircle,
  userPenIcon: UserPenIcon,
  logOutIcon: LogOutIcon,
  creditCard: CreditCard,
  bell: Bell,
  table: Table,
  sun: SunIcon,
  moon: MoonIcon,
  squareSplitHorizontal: SquareSplitHorizontalIcon,
  search: SearchIcon,
  shoppingBag: ShoppingBagIcon,
  users: UsersIcon,
  mailPlusIcon: MailPlusIcon,
  userPlusIcon: UserPlusIcon,
  arrowDownUp: ArrowDownUpIcon,
  cross: CrossIcon,
  x: XIcon,
  check: CheckIcon,
  chevronsLeft: ChevronsLeftIcon,
  chevronsRight: ChevronsRightIcon,
  plusCircle: PlusCircleIcon,
  calendar: CalendarIcon,
  settings: Settings2Icon,
  dotsVertical: EllipsisVerticalIcon,
  edit: EditIcon,
  view: ViewIcon,
  image: ImageIcon, 
  stars: StarsIcon,
  package: Package2Icon,
  hash: HashIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  phone: PhoneIcon,
  clock: ClockIcon,
  user: UserIcon,
  calendarDays: CalendarDaysIcon,
  box: BoxIcon,
  warehouse: WarehouseIcon,
  paperclip: PaperclipIcon,
  dock: DockIcon,
  truck: TruckIcon
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
