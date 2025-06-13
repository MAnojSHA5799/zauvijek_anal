"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserdetails } from "@/hooks/use-userdetails";
import { signOut } from "@/lib/actions";
export function UserNav({ token }: { token: string }) {
  const { user: session } = useUserdetails(token);
  if (session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={session.admin?.image ?? "/user.png"}
                alt={session.admin?.username ?? ""}
              />
              <AvatarFallback>{session.admin?.username?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.admin?.username}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.admin?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
