import { Controller } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { useRegister } from "src/hooks/useRegister";

export function Register() {
  const { control, onSubmit } = useRegister();

  return (
    <Card className="mx-auto max-w-sm mt-10">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      {...field}
                      id="first-name"
                      placeholder="Max"
                      required
                    />
                  </>
                )}
              />
            </div>
            <div className="grid gap-2">
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      {...field}
                      id="last-name"
                      placeholder="Robinson"
                      required
                    />
                  </>
                )}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </>
              )}
            />
          </div>
          <div className="grid gap-2">
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    required
                    error={error?.message}
                  />
                </>
              )}
            />
          </div>
          <div className="grid gap-2">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <>
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input
                    {...field}
                    id="confirm-password"
                    type="password"
                    required
                    error={error?.message}
                  />
                </>
              )}
            />
          </div>
          <Button type="submit" className="w-full" onClick={onSubmit}>
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <a href="#" className="underline">
            Sign in
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
