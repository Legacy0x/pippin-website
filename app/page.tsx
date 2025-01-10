import Image from "next/image";
import Link from "next/link";
import BaseLayout from "./components/BaseLayout";

export default function Home() {
  return (
    <BaseLayout>
      <section className="text-center py-12 px-4 bg-[#f5f7e9] border-b border-[#ddd] max-w-[1000px] mx-auto flex flex-col items-center">
        <Image
          src="/assets/images/pippin.svg"
          alt="Pippin"
          width={250}
          height={250}
          className="mb-4 rounded-full drop-shadow"
        />
        <h1 className="text-4xl mb-2">Welcome to Wobbly Worlds</h1>
        <p className="font-medium mt-4">A place where gentle wonders shape unseen connections, and kind words bloom like flowers.</p>
      </section>

      <section className="flex justify-center gap-6 p-6 flex-wrap max-w-[1000px] mx-auto">
        <div className="menu-card">
          <h2 className="text-2xl">Token</h2>
          <p className="leading-tight">Discover the story behind our token, its inspiration, and how it fuels our community.</p>
          <Link href="/token">Learn More</Link>
        </div>
        <div className="menu-card">
          <h2 className="text-2xl">Unicorn</h2>
          <p className="leading-tight">Meet Pippin the Unicorn and explore our enchanting lore and philosophies.</p>
          <Link href="/unicorn">Explore</Link>
        </div>
        <div className="menu-card">
          <h2 className="text-2xl">Framework</h2>
          <p className="leading-tight">Understand the technology driving our initiatives, built upon the BabyAGI experience.</p>
          <Link href="/framework">Read More</Link>
        </div>
      </section>
    </BaseLayout>
  );
}
