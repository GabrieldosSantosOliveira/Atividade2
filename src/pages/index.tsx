import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Head>
        <title>RocketCoffee</title>
      </Head>
      <div className="overflow-x-hidden max-w-full py-10 flex-col flex min-h-screen  bg-app bg-cover bg-no-repeat">
        <Header />
        <main className="pt-8 flex flex-col justify-center items-center text-5xl">
          <Heading
            fontWeight={700}
            className="text-white lg:text-8xl text-center text-5xl"
          >
            Great Coffee
          </Heading>
          <Heading
            fontWeight={700}
            className="lg:text-8xl text-center text-shadow-heading"
          >
            &lt; Great Code / &gt;
          </Heading>
          <Image
            src="/Coffee.png"
            width={800}
            height={500}
            alt="Dois copos de café com alguns grãos de café ao redor "
            className="object-contain w-full h-full max-w-[50rem] max-h-[31.25rem]"
          />
        </main>
      </div>
    </>
  );
}
