import Image from "next/image";

export default function LinkTree() {
    const links = [
        {
            name: "Github",
            url: "https://github.com/winters0x64",
            logo: "/github.png"
        },
        {
            name: "Twitter",
            url: "https://x.com/ArunKr1shnan",
            logo: "/x.png"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/arun-krishnan-0x64/",
            logo: "/linkedin.png"
        }

    ]
  return (
    <>
        <div className="flex flex-row items-center">
            {links.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 flex items-center p-2 border rounded hover:bg-neutral-950"
            >
            <Image src={link.logo} alt={`${link.name} logo`} width={30} height={30} />
            </a>))}
        </div>
    </>
  );
}