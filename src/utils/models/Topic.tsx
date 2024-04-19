import React from "react";

export interface Topic {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
}