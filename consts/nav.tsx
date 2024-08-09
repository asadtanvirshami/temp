import {
  House,
  NotebookPen,
  Settings,
  ShieldCheck,
  PaintRoller,
  Share2,
  Blocks,
  ListChecks,
  MailCheck,
} from "lucide-react";

const NavData = [
  {
    label: "Builder",
    Icon: <NotebookPen className="w-[16px]" />,
    href: "#",
    active: false,
  },
  {
    label: "Rules",
    Icon: <ShieldCheck className="w-[16px]" />,
    href: "#",
    active: false,
  },
  {
    label: "Settings",
    Icon: <Settings className="w-[16px]" />,
    href: "#",
    active: false,
  },
  {
    label: "Mail",
    Icon: <MailCheck className="w-[16px]" />,
    href: "/dashboard",
    active: false,
  },
  {
    label: "Themes",
    Icon: <PaintRoller className="w-[16px]" />,
    href: "#",
    active: false,
  },
  {
    label: "Share",
    Icon: <Share2 className="w-[16px]" />,
    href: "#",
    active: false,
  },
  {
    label: "Integration",
    Icon: <Blocks className="w-[16px]" />,
    href: "#",
    active: false,
  },
  // {
  //   label: "Approvals",
  //   Icon: <ListChecks className="w-[16px]" />,
  //   active: false,
  // },
];

export default NavData;
