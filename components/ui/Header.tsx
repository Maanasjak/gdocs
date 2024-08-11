import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({children, className}: HeaderProps) => {
  return ( 
    <div className={cn("header", className)}>
      <Link className="md:flex-1" href='/'>
        <Image 
          src="/assets/icons/logo.svg"
          alt="logo"
          width={120}
          height={32}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
   );
}
 
export default Header;