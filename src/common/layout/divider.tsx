import { cn } from "@/utils";
import { Divider as NextDivider } from "@nextui-org/divider";

import type { ClassValue } from "clsx";

export function Divider({ className }: { className?: ClassValue }) {
  return <NextDivider className={cn("bg-gray-200", className)} />;
}
