import { ModeToggle } from "src/components/ModeToggle";
import { ThemeProvider } from "src/components/ThemeProvider";
import { Register } from "src/pages/auth/Register";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      {/* <Login /> */}
      <Register />
    </ThemeProvider>
  );
}
