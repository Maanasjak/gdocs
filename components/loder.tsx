import Image from "next/image";

const Loader = () => {
  return ( 
    <div className="loder">
      <Image 
        src="/assets/icons/loader.svg"
        alt="loder"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
   );
}
 
export default Loader;