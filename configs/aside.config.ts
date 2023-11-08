import { Icons } from "@/components/icons";

interface SidebarNavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
}

export interface DashboardNavProps {
  items: SidebarNavItem[];
}

export const AsideConfig: SidebarNavItem[] = [
  {
    title: "Сотрудники",
    href: "/admin/workers",
    icon: "users",
  },
  {
    title: "Задачи",
    href: "/admin/tasks",
    icon: "tasks",
  },
  {
    title: "Партнёры",
    href: "/admin/partners",
    icon: "partners",
  },
];
