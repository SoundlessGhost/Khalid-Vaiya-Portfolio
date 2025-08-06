import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <div className="flex items-center text-sm font-bold gap-2">
      <Button className="cursor-pointer">Login</Button>
      <Button className="cursor-pointer">Start free</Button>
    </div>
  );
}
