import {
  AlertTriangle,
  ArrowRight,
  FileText,
  ListTodo,
  Store,
  Users2,
  // @ts-ignore
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  file: FileText,
  users: Users2,
  tasks: ListTodo,
  partners: Store,
  warning: AlertTriangle,
  arrowRight: ArrowRight,
};
