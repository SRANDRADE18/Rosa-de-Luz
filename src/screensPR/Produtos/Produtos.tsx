import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from "react-router-dom";
import { SearchIcon, ShoppingBagIcon, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { v4 as uuidv4 } from "uuid";



export const Produtos = (): JSX.Element => {
  // Price range filter options
 // Estados tipados corretamente
const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [modalProduct, setModalProduct] = useState(null);
  
  const priceRanges = [
    { id: "price-1", label: "Até R$ 35,00", min: 0, max: 35 },
    { id: "price-2", label: "De R$ 50,00 A R$ 75,00", min: 50, max: 75 },
    { id: "price-3", label: "De R$ 75,00 A R$ 100,00", min: 75, max: 100 },
    { id: "price-4", label: "De R$ 100,00 A R$ 150,00", min: 100, max: 150 },
    { id: "price-5", label: "Acima de R$ 150,00", min: 150, max: Infinity }
  ];

  const modelTypes = [
    { id: "model-1", label: "Colares" },
    { id: "model-2", label: "Anéis" },
    { id: "model-3", label: "Brincos" },
    { id: "model-4", label: "Pulseiras" },
  ];

const [products] = useState([
  { id: 1, image: "/image-4.png", description: "Modelo de pulseira bem especial", price: 35, model: "Pulseiras" },
  { id: 2, image: "/image-5.png", description: "Pulseiras mãe e filho", price: 150, model: "Pulseiras" },
  { id: 3, image: "/image-6.png", description: "Pulseiras Personalizadas", price: 35.5, model: "Pulseiras" },
  { id: 4, image: "/image-7.png", description: "Colar Âncora da Fé,carrega a força do oceano no peito.  ", price: 89.9, model: "Colares" },
  { id: 5, image: "/image-8.png", description: "Colar artesanal com pingente de coração", price: 59.0, model: "Colares" },
  { id: 6, image: "/image-3.png", description: "Colar Ametista Dourada, beleza um toque sofisticado.", price: 45.5, model: "Colares" },
  { id: 7, image: "/image-10.png", description: "Colar com pingente de lua crescente", price: 72.0, model: "Colares" },
  { id: 8, image: "/image-11.png", description: "Brinco Leveza da Natureza, sofisticação e botânica", price: 48.9, model: "Brincos" },
  { id: 9, image: "/image-1.png", description: "Pulseira Forças do Caminho equilíbrio e poder .", price: 63.0, model: "Pulseiras" },
  { id: 10, image: "/image-13.jpeg", description: "Pulseira Orgulho símbolo de amor e diversidade", price: 42.5, model: "Pulseiras" },
  { id: 11, image: "/image copy 2.png", description: "Colar Jade Laranja,  um toque moderno e ousado", price: 55.0, model: "Colares" },
  { id: 12, image: "/look3.jpeg", description: "Conjunto Essência Violeta, uma peça marcante.", price: 60.0, model: "Anéis" },
  { id: 13, image: "/image-16.jpeg", description: "Anel e Brinco estrela com strass dourado", price: 39.9, model: "Brincos" },
  { id: 14, image: "/image-17.jpeg", description: "Conjunto Águas Celestes, elegância com significado", price: 70.0, model: "Anéis" },
  { id: 15, image: "/image-18.jpeg", description: "Colar Tríade da Proteção rosas em relevo e cruz", price: 80.5, model: "Colares" },
   
]);


  const handlePriceChange = (rangeId: string) => {
  setSelectedPriceRanges((prev) => {
    if (prev.includes(rangeId)) {
      return prev.filter((id) => id !== rangeId);
    } else {
      return [...prev, rangeId];
    }
  });
};

const handleModelChange = (model: string) => {
  setSelectedModels((prev) => {
    if (prev.includes(model)) {
      return prev.filter((m) => m !== model);
    } else {
      return [...prev, model];
    }
  });
};


const filteredProducts = products.filter(product => {
  const inPriceRange =
    selectedPriceRanges.length === 0 ||
    selectedPriceRanges.some((rangeId) => {
      const range = priceRanges.find((r) => r.id === rangeId);
      return range && product.price >= range.min && product.price <= range.max;
    });

  const inModel =
    selectedModels.length === 0 || selectedModels.includes(product.model);

  return inPriceRange && inModel;
});


  

  // Product data


  // Footer links
  const navItems2 = [
    { name: "Whatsapp", href: "https://api.whatsapp.com/send/?phone=5511992560217&text&type=phone_number&app_absent=0", active: false },
    { name: "Instagram", href: "https://www.instagram.com/rosadeluzoficial/", active: false },
    { name: "Facebook", href: "https://www.facebook.com/rosadeluzoficial", active: false },
  ];
  



     const [isOpen, setIsOpen] = useState(false);
  
      const toggleMenu = () => setIsOpen(!isOpen);



const navigate = useNavigate();


  
  const [,setProduct] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("selectedProduct");
    if (saved) {
      setProduct(JSON.parse(saved));
    }
  }, []);


/////////////////////////////

const whatsappNumber = "5511978951764"; // Número da loja

const generateProtocol = (productId: string): string => {
  return (
    productId +
    "-" +
    Date.now().toString().slice(-6) +
    "-" +
    uuidv4().slice(0, 4).toUpperCase()
  );
};

const handleCheckout = (productData) => {
  const protocol = generateProtocol(productData.id);

  const message = ` 
Olá! Gostaria de finalizar meu pedido com os seguintes detalhes:

🛍️ *Produto*: ${productData.description}
💰 *Preço*: R$ ${Number(productData.price).toFixed(2)}
📝 *Descrição*: ${productData.description}
📦 *Protocolo*: ${protocol}
  `;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message.trim())}`;
  window.open(whatsappLink, "_blank");
};











  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[100%] relative">
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
  href="https://wa.me/5511978951764"
  target="_blank"
  rel="noopener noreferrer"
  className="font-medium text-black text-[13px] tracking-[1.69px] hover:text-[#c30000]"
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
  href="https://wa.me/5599999999999"
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
<section className="flex w-full h-[540px] position-relative">
  {/* Imagem à esquerda com sobreposição */}
  <div
    className="relative w-full max-[900px]:w-full min-[901px]:w-1/2 h-full bg-cover bg-no-repeat transition-all duration-300"
    style={{
      backgroundImage: "url('/art.png')",
      backgroundPosition: "center top",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40" />
  </div>

  {/* Texto à direita com fundo dourado brilhante */}
  <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-[#c7a17a] to-[#e2c08a] bg-[length:200%_200%] animate-[shine_5s_linear_infinite] p-10 max-[900px]:hidden">
    <div className="max-w-[500px] font-['Montserrat'] font-medium text-base tracking-[2.08px] leading-normal space-y-4">
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
</section>





   <section className="flex mt-10">
      <div className="hidden md:block w-[274px] ml-2 space-y-4">
        <h3 className="font-medium text-white text-xl  tracking-[2.08px] bg-[#393939] p-4">FAIXA DE PREÇO</h3>
        {priceRanges.map((range) => (
          <div key={range.id} className="flex items-center space-x-2">
            <input className="w-[22px] h-[22px] rounded-none bg-[#393939]" type="checkbox" onChange={() => handlePriceChange(range.id)} />
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

      <div className="block md:hidden w-full flex justify-end px-4 mb-4">
  <button className="bg-[#C09D77] text-white px-4 py-2 rounded-full shadow-md">
    Filtrar
  </button>
</div>

      </div>

  

    <div className={`bg-neutral-100 flex flex-row justify-center w-full`}>

      <div className="bg-neutral-100 overflow-hidden w-[100%] relative">
        {/* Catálogo */}
        <section className="flex mt-10">
          <div className="flex-1 pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <Card key={product.id} className="w-[297px] h-[393px] bg-gradient-to-b from-[#f8f0e8] to-[#f4e4cf] shadow-lg rounded-xl border border-[#bf8c50] transition-transform transform hover:scale-105">
                  <CardContent className="p-4 flex flex-col items-center">
                    <img src={product.image} alt={product.description} className="w-[241px] h-[209px] object-cover rounded-lg border border-[#bf8c50]" />
                    <p className="font-medium text-[#5e3a2d] text-xl mt-4">{product.description}</p>
                    <p className="font-semibold text-[#bf8c50] text-xl mt-2">R${product.price.toFixed(2)}</p>
                    <Button onClick={() => setModalProduct(product)} className="mt-4 bg-[#bf8c50] text-white hover:bg-[#a67c44]">Comprar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
   {modalProduct && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="relative z-60 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg">
      <img src={modalProduct.image} alt={modalProduct.description} className="w-full h-full object-cover rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-[#5e3a2d] mb-2">{modalProduct.description}</h2>
      <p className="text-lg text-[#bf8c50] font-semibold mb-4">R$ {modalProduct.price.toFixed(2)}</p>
      <div className="flex justify-between">
        <Button onClick={() => setModalProduct(null)} className="bg-gray-300 text-black">Cancelar</Button>
        <Button onClick={() => handleCheckout(modalProduct)} className="bg-[#bf8c50] text-white hover:bg-[#a67c44]">Avançar</Button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
    </section>

    <Separator className="my-4" />

    {/* Separator */}

    {/* Footer */}
<footer className="w-full bg-[#2a2a2a] text-white px-[20px] sm:px-[40px] lg:px-[179px] pt-[87px]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
    <div>
      <a href="/compra" className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">
        Produtos
      </a>
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
