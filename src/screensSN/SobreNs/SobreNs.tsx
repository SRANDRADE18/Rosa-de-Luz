import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from 'react';

// Product data for mapping
const products = [
  {
    id: 1,
    image: "/image-1.png",
    title: "Pulseiras Personalizadas",
    alt: "Pulseiras Personalizadas",
  },
  {
    id: 2,
    image: "/image-2.png",
    title: "Colares personalizados",
    alt: "Colares personalizados",
  },
  {
    id: 3,
    image: "/image-3.png",
    title: "Brincos Folhas de Perolas",
    alt: "Brincos Folhas de Perolas",
  },
];

// Navigation items
const navItems = [
  { name: "Home", href: "/", active: true },
  { name: "Comprar", href: "compra", active: false },
  { name: "Sobre", href: "sobre", active: false },
  { name: "Contato", href: "contato", active: false },
  { name: "Produtos", href: "/produtos", active: false },
];
const navItems2 = [
  { name: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=5511992560217&text&type=phone_number&app_absent=0", active: false },
  { name: "Instagram", href: "https://www.instagram.com/rosadeluzoficial/", active: false },
  { name: "Facebook", href: "https://www.facebook.com/rosadeluzoficial", active: false },
];

const footerSections = {
  products: ["Perguntas frequentes", "Entrega", "Garantia"],
  help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
  social: navItems2.filter(item =>
    ["Whatsapp", "Instagram", "Facebook"].includes(item.name)
  ),
};


export const SobreNs = (): JSX.Element => {
  
    const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <div
      className="bg-neutral-100 flex flex-row justify-center w-full"
      data-model-id="192:151"
    >
      <div className="bg-neutral-100 overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation */}
     <header className="flex items-center justify-between px-7 h-[84px] bg-white shadow-md relative">
            {/* Logo */}
            <a href="/" className="w-[70px] h-[70px]">
                <img
                    className="w-full h-full object-contain"
                    alt="Rosa de Luz Logo"
                    src="/image-303.png"
                />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
                <a href="/" className="font-medium text-[#c30000] text-[13px] tracking-[1.69px] hover:text-black">Home</a>
                <a href="/produtos" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Compra</a>
                <a href="/sobre" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Sobre</a>
                         <a
  href="https://wa.me/5599999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  Contato
</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
                <SearchIcon className="w-5 h-5 cursor-pointer" />
                <ShoppingBagIcon className="w-5 h-5 cursor-pointer" />
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="lg:hidden text-black">
                {isOpen ? <XIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="absolute top-[84px] left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-6 z-20">
                    <a href="/" className="font-medium text-[#c30000] text-lg tracking-[1.69px] hover:text-black">Home</a>
                    <a href="/produtos" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Compra</a>
                    <a href="/sobre" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Sobre</a>
                            <a
  href="https://wa.me/5511978951764"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  Contato
</a>
                </nav>
            )}
        </header>

        {/* Hero Section */}
<section className="relative w-full">
  
  {/* Imagem de fundo responsiva */}
  <div className="w-full h-[260px] md:h-[860px] bg-[url('/fundo02.png')] bg-cover bg-center md:bg-[50%_50%]" />

  {/* Botões */}
  <div className="w-full flex flex-col md:flex-row items-center justify-center md:absolute md:bottom-8 md:left-10 space-y-4 md:space-y-0 md:space-x-12 px-4 mt-6 md:mt-0">
    <Button className="w-48 h-[54px] bg-[#d9d9d9] rounded-[5px] hover:bg-[#c4c4c4]">
                        <a
  href="https://wa.me/5599999999999"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]"
>
  CONTATO
</a>
    </Button>

    <Button className="w-48 h-[54px] bg-[#d9d9d9] rounded-[5px] hover:bg-[#c4c4c4]">
      <span className="font-['Montserrat',Helvetica] font-semibold text-black text-sm tracking-[1.82px]">
        COMPRE JÁ
      </span>
    </Button>
  </div>
</section>




        {/* Products Section */}
<section className="flex justify-center mt-14 mb-14 w-full">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full max-w-[991px]">
    {products.map((product) => (
      <Card
        key={product.id}
        className="w-full max-w-[297px] h-[393px] bg-[#ffffff17] shadow-[0px_4px_10px_#00000040] mx-auto"
      >
        <CardContent className="p-0 flex flex-col items-center">
          <img
            className="w-[209px] h-[209px] mt-[29px] object-cover"
            alt={product.alt}
            src={product.image}
          />
          <h3 className="mt-9 font-['Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px] text-center">
            {product.title}
          </h3>
          <div className="mt-6 w-[237px] h-[43px] bg-[#ffffff17] shadow-[0px_4px_10px_#00000040] flex items-center justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-6 h-[24px]"
                alt="Star rating"
                src="/vector.svg"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</section>


        <section className="bg-white py-16 px-6 md:px-20">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Veja como usar</h2>
    <p className="text-gray-600 mt-4">Inspire-se com combinações reais e cheias de estilo feitas com nossas peças.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Example looks */}
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look2.jpeg" alt="Look 1 com colar personalizado" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Pulseira + Relógio: A Combinação Perfeita
        Unindo funcionalidade e elegância em um só look.</h3>
        <p className="text-gray-500 text-sm mt-2">Ideal para dias ensolarados ou passeios ao ar livre.</p>
      </div>
    </div>

    
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look3.jpeg" alt="Look 2 com pulseiras" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Anel + Brincos: Detalhes que Encantam
        Elegância em cada traço, brilho em cada olhar.</h3>
        <p className="text-gray-500 text-sm mt-2">Destaque nos pequenos detalhes. Combine com looks básicos.</p>
      </div>
    </div>

    
    <div className="rounded-xl overflow-hidden shadow-md">
      <img src="/look4.jpeg" alt="Look 3 com brincos de pérolas" className="w-full h-100 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">Pulseira + Colar: Elegância Natural
        Conecte-se com sua essência através da leveza e do brilho.</h3>
        <p className="text-gray-500 text-sm mt-2">Toque final para eventos especiais ou dia a dia elegante.</p>
      </div>
    </div>
  </div>
</section>


        {/* Footer */}
 <footer className="w-full bg-[#2a2a2a] text-white px-[20px] sm:px-[40px] lg:px-[179px] pt-[87px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div>
      <h3  className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        <a href="/produtos">Produtos</a> 
      </h3>
      <ul className="space-y-[27px]">
        {["Pulseiras", "Colares", "Brincos"].map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={`/${item.toLowerCase()}`} className="hover:text-[#bf8c50] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Ajuda
      </h3>
      <ul className="space-y-[27px]">
        {["Formas de pagamento", "Perguntas frequentes", "Reclame aqui"].map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={`/${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-[#bf8c50] transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Social
      </h3>
      <ul className="space-y-[27px]">
        {navItems2.map((item, index) => (
          <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#bf8c50] transition-colors">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="text-center">
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Formas de pagamento
      </h3>
      <a href="/formas-de-pagamento">
        <img
          className="w-56 h-[60px] mx-auto object-cover"
          alt="Payment methods"
          src="/image-77.png"
        />
      </a>
    </div>
  </div>

  <div className="my-[30px] bg-[#d9d9d9] h-[1px]"></div>

  <p className="font-['Montserrat',Helvetica] font-normal text-[11px] text-center">
    <a href="/" className="hover:text-[#bf8c50] transition-colors">
      ROSA DE LUZ Comércio LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo
    </a>
  </p>
</footer>
      </div>
    </div>
  );
};
