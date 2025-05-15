import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components produtos/ui/checkbox";
import { Separator } from "../../components/ui/separator";

export const Produtos = (): JSX.Element => {
  // Price range filter options
  const priceRanges = [
    { id: "price-1", label: "Até R$ 25,00" },
    { id: "price-2", label: "De R$ 50,00 A R$ 75,00" },
    { id: "price-3", label: "De R$ 75,00 A R$ 100,00" },
    { id: "price-4", label: "De R$ 100,00 A R$ 150,00" },
    { id: "price-5", label: "Acima de R$ 150,00" },
  ];

  // Model filter options
  const modelTypes = [
    { id: "model-1", label: "Colares" },
    { id: "model-2", label: "Anéis" },
    { id: "model-3", label: "Brincos" },
    { id: "model-4", label: "Banhados a Ouro" },
    { id: "model-5", label: "Banhados a Prata" },
  ];


  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Comprar", href: "compra", active: false },
    { name: "Sobre", href: "sobre", active: false },
    { name: "Contato", href: "contato", active: false },
    { name: "Produtos", href: "/produtos", active: false },
  ];

  // Product data
  const products = [
    {
      id: 1,
      image: "/image-4.png",
      description:
        "Modelo de pulseira bem especial, porque representa muito do que eu creio",
      price: "R$35,00",
    },
    {
      id: 2,
      image: "/image-5.png",
      description: "Pulseiras mãe e filho",
      price: "R$150,00",
    },
    {
      id: 3,
      image: "/image-6.png",
      description: "Pulseiras Personalizadas",
      price: "R$35,50",
    },
    {
      id: 4,
      image: "/image-4.png",
      description:
        "Modelo de pulseira bem especial, porque representa muito do que eu creio",
      price: "R$35,00",
    },
    {
      id: 5,
      image: "/image-5.png",
      description: "Pulseiras mãe e filho",
      price: "R$150,00",
    },
    {
      id: 6,
      image: "/image-6.png",
      description: "Pulseiras Personalizadas",
      price: "R$35,50",
    },
  ];

  // Footer links
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
  
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 overflow-hidden w-[1440px] relative">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-10 py-2.5">
          <img
            className="w-[70px] h-[70px] object-cover"
            alt="Logo"
            src="/image-303.png"
          />

          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium text-[13px] tracking-[1.69px] ${
                  item.active ? "text-[#c30000]" : "text-black"
                }`}
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center ml-6 space-x-6">
              <img
                className="w-5 h-5 object-cover"
                alt="Pesquisar"
                src="/icons8-pesquisar-50-2.png"
              />
              <img
                className="w-5 h-5 object-cover"
                alt="Sacola de compras"
                src="/icons8-sacola-de-compras-50-2.png"
              />
            </div>
          </div>
        </nav>


        {/* Hero Section */}
        <section className="flex w-full h-[534px]">
          <img
            className="w-[498px] h-[534px] object-cover"
            alt="Jewelry showcase"
            src="/image.png"
          />
          <div className="bg-[#212a2f] flex-1 flex items-center justify-center p-10">
            <div className="max-w-[572px] [font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px] leading-normal">
              Quem disse que estilo não pode ter alma?
              <br /> Aqui, cada bijuteria é feita com intenção, pra te lembrar
              que você não precisa se encaixar — só se expressar.
              <br /> Escolha peças que contem a sua história, do seu jeitinho.
              <br />
              Porque o verdadeiro luxo é ser você mesma.
            </div>
          </div>
        </section>

        {/* Catalog Section */}
        <section className="flex mt-10">
          {/* Filters */}
          <div className="w-[274px] ml-2 space-y-4">
            {/* Price Range Filter */}
            <div>
              <div className="w-full h-[37px] bg-[#393939] flex items-center px-4">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px]">
                  FAIXA DE PREÇO
                </h3>
              </div>
              <Card className="shadow-[0px_4px_4px_#00000040] rounded-none">
                <CardContent className="p-6 space-y-4">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={range.id}
                        className="w-[22px] h-[22px] rounded-none bg-[#393939]"
                      />
                      <label
                        htmlFor={range.id}
                        className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xs tracking-[1.56px]"
                      >
                        {range.label}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Model Filter */}
            <div>
              <div className="w-full h-[37px] bg-[#393939] flex items-center px-4">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-base tracking-[2.08px]">
                  MODELO
                </h3>
              </div>
              <Card className="shadow-[0px_4px_4px_#00000040] rounded-none">
                <CardContent className="p-6 space-y-4">
                  {modelTypes.map((model) => (
                    <div key={model.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={model.id}
                        className="w-[22px] h-[22px] rounded-none bg-[#393939]"
                      />
                      <label
                        htmlFor={model.id}
                        className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xs tracking-[1.56px]"
                      >
                        {model.label}
                      </label>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Catalog Header */}
          <div className="flex-1 pl-8">
            <div className="w-[274px] h-[37px] bg-[#393939] flex items-center justify-center mb-8">
              <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-white text-[11px] tracking-[1.43px]">
                CATÁLOGO
              </h3>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="w-[297px] h-[393px] bg-[#bf8c5033] shadow-[0px_4px_10px_#00000040] rounded-none   transition: all 0.3s ease; 
                   rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-gray-100 hover:z-10
                  "
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-[241px] h-[209px] mt-[30px] object-cover"
                        alt={product.description}
                        src={product.image}
                      />
                      <div className="w-[242px] mt-6 [font-family:'Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px] leading-normal">
                        {product.description}
                      </div>
                      <div className="mt-auto mb-5 self-start ml-[27px] [font-family:'Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                        {product.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="w-[297px] h-[393px] bg-[#bf8c5033] shadow-[0px_4px_10px_#00000040] rounded-none   transition: all 0.3s ease; 
                   rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-white hover:to-gray-100 hover:z-10
                  "
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-[241px] h-[209px] mt-[30px] object-cover"
                        alt={product.description}
                        src={product.image}
                      />
                      <div className="w-[242px] mt-6 [font-family:'Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px] leading-normal">
                        {product.description}
                      </div>
                      <div className="mt-auto mb-5 self-start ml-[27px] [font-family:'Montserrat',Helvetica] font-medium text-black text-base tracking-[2.08px]">
                        {product.price}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>



            {/* Pagination */}
            <div className="flex justify-center mt-16">
              <div className="w-[337px] h-16 bg-[#d6ad6033] rounded-[10px] flex items-center justify-between px-8">
                <img
                  className="w-[35px] h-[35px] object-cover transform rotate-180 cursor-pointer"
                  alt="Página anterior"
                  src="/icons8-seta-direita-48-2.png"
                />
                <div className="[font-family:'Montserrat',Helvetica] font-semibold text-[#4a3f35] text-lg">
                  1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
                </div>
                <img
                  className="w-[35px] h-[35px] object-cover cursor-pointer"
                  alt="Próxima página"
                  src="/icons8-seta-direita-48-2.png"
                />
              </div>
            </div>
          </div>
        </section>

    {/* Footer */}
        <footer className="w-full h-[314px] bg-[#2a2a2a] text-white">
          <div className="max-w-[1440px] mx-auto px-[179px] pt-[78px] relative">
            {/* Products Section */}
            <div className="absolute left-[249px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
                Produtos
              </h3>
              <ul className="space-y-3">
                {footerSections.products.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div className="absolute left-[488px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
                Ajuda
              </h3>
              <ul className="space-y-3">
                {footerSections.help.map((item, index) => (
                  <li
                    key={index}
                    className="font-['Montserrat',Helvetica] font-normal text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Section */}
            <div className="absolute left-[682px]">
  <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-4">
    Social
  </h3>
  <ul className="space-y-3">
    {footerSections.social.map((item, index) => (
      <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
        <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>


            {/* Payment Methods */}
            <div className="absolute left-[867px]">
              <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl text-center mb-4">
                Formas de pagamento
              </h3>
              <img
                className="w-56 h-[60px] object-cover"
                alt="Payment methods"
                src="/image-77.png"
              />
            </div>

            <Separator className="absolute w-[1100px] h-px top-[235px] bg-[#d9d9d9]" />

            {/* Copyright */}
            <div className="absolute w-[744px] top-[275px] left-[345px] font-['Montserrat',Helvetica] font-normal text-[11px] text-center">
              Rosa de Luz LTDA S/A. – CNPJ 13.800.191/0001-69 - CEP 04773-000.
              Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
