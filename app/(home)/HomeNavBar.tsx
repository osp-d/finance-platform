import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function HomeNavBar() {
  return (
    <NavigationMenu className="max-h-[72px] min-w-full list-none bg-slate-100 px-14 py-5 text-base text-slate-950">
      <div className="flex w-full max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-4 font-medium">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="p-2 text-2xl font-bold hover:text-slate-600"
            >
              Finance
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#features"
              className="p-2 hover:text-slate-600"
            >
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/pricing"
              className="p-2 hover:text-slate-600"
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contacts"
              className="p-2 hover:text-slate-600"
            >
              Contacts
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <div className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/sign-in"
              className="p-2 font-semibold hover:text-slate-600"
            >
              Sign in
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/sign-up"
              className="rounded-lg bg-slate-950 p-2 px-4 font-semibold text-white hover:bg-slate-600"
            >
              Sign up
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>
      </div>
    </NavigationMenu>
  );
}
