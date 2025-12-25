"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronDown2Icon } from "@/icons/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";
import { useEffect, useState } from "react";
import { useI18n } from "@/app/providers/intl";

export default function DesktopNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [activeDropdownKey, setActiveDropdownKey] = useState("");
  const { t } = useI18n();

  function toggleActiveDropdown(key: string) {
    setActiveDropdownKey((prev) => (prev === key ? "" : key));
  }

  // Hash değişimini takip et (#join_us gibi)
  useEffect(() => {
    const updateHash = () => {
      setHash(window.location.hash);
    };

    updateHash(); // ilk render
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Route değişince dropdown kapansın
  useEffect(() => {
    setActiveDropdownKey("");
  }, [pathname]);

  return (
    <nav className="hidden lg:flex lg:items-center bg-[#F9FAFB] dark:bg-white/3 rounded-full p-1 max-h-fit">
      {navItems.map((item: any) => {
        // ---------- NORMAL LINK ----------
        if (item.type === "link") {
          const isActive =
            pathname === item.href ||
            (item.href.includes("#") &&
              pathname === item.href.split("#")[0] &&
              hash === `#${item.href.split("#")[1]}`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-gray-500 dark:text-gray-400 text-sm px-4 py-1.5 rounded-full hover:text-primary-500 font-medium",
                {
                  "bg-white dark:bg-white/5 text-gray-800 dark:text-white/90 shadow-xs":
                    isActive,
                }
              )}
            >
              {t(
                (item as any).labelKey ?? (item.label as string),
                String(item.label)
              )}
            </Link>
          );
        }

        // ---------- DROPDOWN ----------
        if (item.type === "dropdown") {
          const isDropdownActive = activeDropdownKey === item.label;

          return (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleActiveDropdown(item.label)}
                onMouseEnter={() => toggleActiveDropdown(item.label)}
                onMouseLeave={() => toggleActiveDropdown(item.label)}
                onKeyDown={(e) => {
                  if (isDropdownActive && e.key === "Escape") {
                    toggleActiveDropdown(item.label);
                  }
                }}
                className={cn(
                  "text-gray-500 dark:text-gray-400 hover:text-primary-500 group text-sm inline-flex gap-1 items-center px-4 py-1.5 font-medium rounded-full",
                  {
                    "bg-white dark:bg-white/5 text-gray-800 dark:text-white/90 shadow-xs":
                      item.items.some((sub: any) => {
                        if (sub.href.includes("#")) {
                          const [path, subHash] = sub.href.split("#");
                          return pathname === path && hash === `#${subHash}`;
                        }
                        return pathname === sub.href;
                      }),
                  }
                )}
              >
                <span>
                  {t(
                    (item as any).labelKey ?? (item.label as string),
                    String(item.label)
                  )}
                </span>
                <ChevronDown2Icon
                  className={cn("size-4 transition-transform duration-200", {
                    "rotate-180": isDropdownActive,
                  })}
                />
              </button>

              {isDropdownActive && (
                <div
                  onMouseEnter={() => toggleActiveDropdown(item.label)}
                  onMouseLeave={() => toggleActiveDropdown(item.label)}
                  className="absolute right-0 w-[266px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50"
                >
                  <div className="space-y-1">
                    {item.items.map((subItem: any) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                      >
                        {t(
                          (subItem as any).labelKey ??
                            (subItem.label as string),
                          String(subItem.label)
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}
