import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components produtos/ui/checkbox";
import { Separator } from "../../components/ui/separator";
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from "lucide-react";
import { useState } from 'react';
import { Button } from "../../components/ui/button";

export const Produtos = (): JSX.Element => {
  // Price range filter options
 const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const priceRanges = [
    { id: "price-1", label: "Até R$ 25,00", min: 0, max: 25 },
    { id: "price-2", label: "De R$ 50,00 A R$ 75,00", min: 50, max: 75 },
    { id: "price-3", label: "De R$ 75,00 A R$ 100,00", min: 75, max: 100 },
    { id: "price-4", label: "De R$ 100,00 A R$ 150,00", min: 100, max: 150 },
    { id: "price-5", label: "Acima de R$ 150,00", min: 150, max: Infinity }
  ];

  const modelTypes = [
    { id: "model-1", label: "Colares" },
    { id: "model-2", label: "Anéis" },
    { id: "model-3", label: "Brincos" },
    { id: "model-4", label: "Banhados a Ouro" },
    { id: "model-5", label: "Banhados a Prata" }
  ];

  const [products] = useState([
    { id: 1, image: "/image-4.png", description: "Modelo de pulseira bem especial", price: 35, model: "Pulseiras" },
    { id: 2, image: "/image-5.png", description: "Pulseiras mãe e filho", price: 150, model: "Pulseiras" },
    { id: 3, image: "/image-6.png", description: "Pulseiras Personalizadas", price: 35.5, model: "Pulseiras" }
  ]);

  const filteredProducts = products.filter(product => {
    const inPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => product.price >= range.min && product.price <= range.max);
    const inModel = selectedModels.length === 0 || selectedModels.includes(product.model);
    return inPriceRange && inModel;
  });

  const handlePriceChange = (range) => {
    setSelectedPriceRanges((prev) => prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]);
  };

  const handleModelChange = (model) => {
    setSelectedModels((prev) => prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]);
  };


  

  // Product data


  // Footer links
  const navItems2 = [
    { name: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=5511992560217&text&type=phone_number&app_absent=0", active: false },
    { name: "Instagram", href: "https://www.instagram.com/rosadeluzoficial/", active: false },
    { name: "Facebook", href: "https://www.facebook.com/rosadeluzoficial", active: false },
  ];
  



     const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => setIsOpen(!isOpen);

      const footerData = {
       products: ["Perguntas frequentes", "Entrega", "Garantia"],
       help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
       social: ["Facebook", "Instagram", "Twitter", "Whatsapp"  ],

 
  
};
  
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[1440px] relative">
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
                <a href="/contato" className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]">Contato</a>
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
                    <a href="/contato" className="font-medium text-black text-lg tracking-[1.69px] hover:text-[#c30000]">Contato</a>
                </nav>
            )}
        </header>


        {/* Hero Section */}
<section className="flex w-full h-[534px]">
  {/* Imagem à esquerda com sobreposição */}
  <div
    className="relative w-1/2 h-full bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('/art.png')",
      backgroundPosition: "center top"
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40" />
  </div>

  {/* Texto à direita com fundo dourado brilhante */}
  <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-[#c7a17a] to-[#e2c08a] bg-[length:200%_200%] animate-[shine_5s_linear_infinite] p-10">
    <div className="max-w-[500px] [font-family:'Montserrat',Helvetica] font-medium text-base tracking-[2.08px] leading-normal space-y-4">
      <p className="text-[24px] text-white">
        Cada peça carrega um sussurro da sua essência.
      </p>
      <p className="text-[24px] text-white">
        Não é sobre seguir tendências — é sobre eternizar momentos.
      </p>
      <p className="text-[24px] text-white">
        Use o que te representa.
      </p>
      <p className="italic text-[26px] text-white">
        Rosa de Luz: beleza com verdade.
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes shine {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
  `}</style>
</section>





   <section className="flex mt-10">
      <div className="w-[274px] ml-2 space-y-4">
        <h3 className="font-medium text-white text-xl  tracking-[2.08px] bg-[#393939] p-4">FAIXA DE PREÇO</h3>
        {priceRanges.map((range) => (
          <div key={range.id} className="flex items-center space-x-2">
            <input className="w-[22px] h-[22px] rounded-none bg-[#393939]" type="checkbox" onChange={() => handlePriceChange(range)} />
            <label className="text-black font-medium text-xl ">{range.label}</label>
          </div>
        ))}

        <h3 className="font-medium text-white text-xl  tracking-[2.08px] bg-[#393939] p-4">MODELO</h3>
        {modelTypes.map((model) => (
          <div className="flex items-center space-x-2" key={model.id}>
            <input className="w-[22px] h-[22px] rounded-none bg-[#393939]" type="checkbox" onChange={() => handleModelChange(model.label)} />
            <label className="text-black font-medium text-xl ">{model.label}</label>
          </div>
        ))}
      </div>

      <div className="flex-1 pl-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <Card key={product.id} className="w-[297px] h-[393px] bg-gradient-to-b from-[#f8f0e8] to-[#f4e4cf] shadow-lg rounded-xl border border-[#bf8c50] transition-transform transform hover:scale-105">
              <CardContent className="p-4 flex flex-col items-center">
                <img src={product.image} alt={product.description} className="w-[241px] h-[209px] object-cover rounded-lg border border-[#bf8c50]" />
                <p className="font-medium text-[#5e3a2d] text-xl  mt-4">{product.description}</p>
                <p className="font-semibold text-[#bf8c50] text-xl mt-2">R${product.price.toFixed(2)}</p>
                <Button className="mt-4 bg-[#bf8c50] text-white hover:bg-[#a67c44]">Comprar</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
<footer className="w-full bg-[#2a2a2a] text-white px-[20px] sm:px-[40px] lg:px-[179px] pt-[87px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div>
      <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Produtos
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
