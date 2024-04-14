import { Moon, Sun } from "lucide-react";

import { useTheme } from "src/components/ThemeProvider";
import { Button } from "src/components/ui/button";

export function ModeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-0 right-0">
      <Button variant="link" size="icon" onClick={toggleTheme}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
