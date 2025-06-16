import { JSX } from "react";

export interface InaraEvent {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  description: string;
  thumbnail: string;
  detailsComponent: JSX.Element;
  hidden?: boolean;
}
