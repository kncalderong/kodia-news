"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import SearchIcon from "@/assets/images/icon-search.svg";
import Image from "next/image";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <section className="w-full flex items-center justify-center gap-4 md:gap-6">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="block relative w-6 h-6 md:w-8 md:h-8">
        <Image
          src={SearchIcon}
          alt="searchIcon"
          fill
          className="object-cover"
        />
      </div>
      <input
        type="search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="min-h-[24px] bg-dark-blue text-white flex-grow focus-visible:bg-dark-blue focus-visible:border-b-[1px] focus-visible:border-b-greyish-blue caret-red focus-visible:outline-none cursor-pointer text-base md:text-2xl"
        placeholder={placeholder}
      />
    </section>
  );
}
