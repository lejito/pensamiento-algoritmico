import React from "react";
import { Topic } from "./Topic";

export interface Section {
  id: string;
  title: string;
  description: string;
  image: { src: string; width: number; height: number };
  content?: React.ReactNode;
  topics: Topic[];
}
