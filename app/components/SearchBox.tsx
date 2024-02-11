'use client';

import { SearchIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface SearchBoxProps {
  placeholder?: string;
}

const SearchBox: FC<SearchBoxProps> = ({ placeholder }: SearchBoxProps) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState<string | null>(searchParams.get("query") || null);

  useEffect(() => {
    setSearchQuery(searchParams.get("query") || null);
  }, [searchParams]);

  function handleSearch(term: string) {
    if (term) {
      replace(`${pathname}?query=${encodeURIComponent(term)}`);
    } else {
      replace(pathname);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch(searchQuery || '');
    }
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label  htmlFor="search" className="sr-only">
        Search...
      </label>
      <input
        id="search"
        className="peer block border border-gray-300 w-[150px] lg:w-full  bg-transparent px-3.5 py-2 text-gray-900 dark:text-gray-100 dark:placeholder:text-gray-100  placeholder:text-[13px] lg:placeholder:text-[17px] placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={searchQuery || ""}
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SearchIcon className="absolute w-4 h-4 right-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBox;
