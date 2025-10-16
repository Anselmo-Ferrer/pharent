import PharentBanner from "@/assets/favicon.png"
import { StoreFooter } from "@/components/Footer";
import Image from "next/image";
import atletaImage from '@/assets/atleta-home.jpg'

export default function Home() {
  return (
    <div className="bg-white w-full h-[5000px]">
      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative h-[600px] bg-black text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image src={atletaImage} alt="Hero" fill className="object-cover opacity-60" priority />
          </div>
          <div className="relative container h-full flex flex-col justify-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 max-w-3xl text-balance">
              DESCUBRA O SEU POTENCIAL
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl text-muted-foreground">
              Equipamentos esportivos projetados para campeões
            </p>
            <div className="flex gap-4">
              <button className="bg-[#0093c6] cursor-pointer w-[150px] rounded-md py-2 hover:bg-accent/90 text-accent-foreground">
                Comprar agora
              </button>
              <button
                className="border-white cursor-pointer border w-[150px] rounded-md py-2 text-white hover:bg-white hover:text-black bg-transparent"
              >
                Explorar coleções
              </button>
            </div>
          </div>
        </section>

        <StoreFooter />

      </main>
    </div>
  );
}
