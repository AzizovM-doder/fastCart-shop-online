import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const onCheckedChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-3">
      <Sun className="h-4 w-4 opacity-70" />
      <Switch checked={isDark} onCheckedChange={onCheckedChange} />
      <Moon className="h-4 w-4 opacity-70" />
    </div>
  );
}
