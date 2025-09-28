import { Icons } from "@/assets/icons";
import type { FC, PropsWithChildren, SVGProps } from "react";

export type TOptional<T> = T | undefined;

export type IPaginatedResponseType<T> = {
  data: T;
  hasNextPage: boolean;
  page: number;
  totalPage: number;
  totalCount: number;
};

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IMeta {
  code: number;
  message: string;
}

export type TResponse<T> = {
  meta: IMeta;
  data: T;
};

export type FCC<P = {}> = FC<PropsWithChildren<P>>;

export interface IOption<T> {
  label: string;
  value: T;
  disabled?: boolean;
}

export type TCommonSort = "ASC" | "DESC";
export interface NavItem {
  title: string;
  url: string;
  disabled?: boolean;
  external?: boolean;
  shortcut?: [string, string];
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  isActive?: boolean;
  items?: NavItem[];
}
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface IPaging {
  page: number;
  limit: number;
  total?: number;
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type CommonRequestType = {
  page?: number;
  pageSize?: number;
  sort_by?: string;
  order_by?: "desc" | "asc";
  fields?: string;
  search?: string;
};

export enum EMedia {
  Image = "image",
  Video = "video",
}

export interface IMedia {
  id?: string;
  url: string;
  type?: EMedia;
  file?: File | null;
}
