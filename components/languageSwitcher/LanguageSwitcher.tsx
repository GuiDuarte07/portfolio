import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    const currentPathname = window.location.pathname;
    const newPathname = currentPathname.replace(
      `/${currentLocale}`,
      `/${locale}`
    );
    router.push(newPathname);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="mt-2 dark:bg-slate-600 bg-slate-200 rounded-md px-2 py-2"
      >
        <DropdownMenuItem
          className={cn("px-1 rounded-md", currentLocale === 'en' ? "dark:text-slate-200 text-black cursor-default" : "hover:dark:bg-slate-400 hover:bg-slate-400 cursor-pointer")}
          onClick={() => switchLanguage("en")}
        >
          <span className="px-1 text-sm mont-[family-name:var(--font-geist-sans)]">
            English {currentLocale === "en" && "✓"}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("px-1 rounded-md", currentLocale === 'pt' ? "dark:text-slate-200 text-black cursor-default" : "hover:dark:bg-slate-400 hover:bg-slate-400 cursor-pointer")}
          onClick={() => switchLanguage("pt")}
        >
          <span className="px-1 text-sm font-[family-name:var(--font-geist-sans)]">
            Português {currentLocale === "pt" && "✓"}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
