import  Nav  from "@/components/Nav";
import { Hero } from "@/sections";

export default function Home() {
  return (
    <main className='relative'>

      <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b py-28'>
      <Hero />
    </section>
 
    </main>
  )
}
