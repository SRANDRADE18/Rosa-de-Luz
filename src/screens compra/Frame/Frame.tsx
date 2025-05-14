import { StarIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components compra/ui/card";
import { SearchIcon, ShoppingBagIcon } from "lucide-react";
import { Separator } from "../../components/ui/separator";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Frame = (): JSX.Element => {
    // Product data
    const productData = {
        id: 'BX001',
        title: "Pulseira Mística com Pedra Olho de Tigre e Pingentes Esotéricos – Força, Proteção e Estilo",
        availability: "Disponibilidade: Imediata",
        price: "R$ 35,90",
        featured: "DESTAQUE",
        image: "/image.png",
        shortDescription: "Modelo de pulseira bem especial, porque representa muito do que eu creio",
        rating: 5,
        description: `Pulseira Mística com Pedra Olho de Tigre e Pingentes Esotéricos – Força, Proteção e Estilo\nDesperte sua força interior com essa pulseira artesanal feita com pedras naturais de Olho de Tigre, conhecidas por seu poder de proteção e coragem.\n🗡 Espada da Coragem – Para enfrentar desafios com determinação.\n✝ Cruz da Fé – Para guiar seus passos com confiança.\n🜁 Pentagrama da Harmonia – Para equilibrar corpo e mente.\n⚕ Caduceu da Cura – Para promover bem-estar e equilíbrio.\n✠ Cruz Templária – Símbolo de honra e bravura.\n∞ Símbolo do Infinito – Para lembrar que suas possibilidades são ilimitadas.\n🌌 Liberte seu verdadeiro potencial – leve essa pulseira com você para onde for.`
    };

    const footerData = {
        products: ["Perguntas frequentes", "Entrega", "Garantia"],
        help: ["Reclame aqui", "Email de Contato", "Sustentabilidade"],
        social: ["Facebook", "Instagram", "Twitter", "Whatsapp"],
    };

    const whatsappNumber = '5511978951764'; // Substitua pelo número do WhatsApp da loja
    const [protocolNumber, setProtocolNumber] = useState<string | null>(null);

    const generateProtocol = (productId: string) => {
        const protocol = productId + '-' + Date.now().toString().slice(-6) + '-' + uuidv4().slice(0, 4).toUpperCase();
        setProtocolNumber(protocol);
    };

    const handleCheckout = () => {
        if (!protocolNumber) generateProtocol(productData.id);
        const message = `Olá! Gostaria de finalizar meu pedido com os seguintes detalhes:%0A%0A🛒 *Produto*: ${productData.title}%0A💲 *Preço*: ${productData.price}%0A📄 *Descrição*: ${productData.shortDescription}%0A🔐 *Número do Protocolo*: ${protocolNumber}`;
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="bg-neutral-100 flex flex-row justify-center w-full">
            <div className="bg-neutral-100 overflow-hidden w-[100%] relative">
                {/* Product Info */}
                <div className="flex flex-col md:flex-row gap-8 mt-8 px-4 md:px-16">
                    <div className="flex flex-col md:w-1/2">
                        <div className="w-[303px] mt-4 mx-auto md:ml-[31px] font-['Inter',Helvetica] text-black text-5xl text-center">{productData.featured}</div>
                        <div className="w-[305px] mt-8 mx-auto md:ml-0 font-['Inter',Helvetica] text-black text-6xl text-center">{productData.price}</div>
                        <div className="flex justify-center md:justify-start mt-8 bg-[#ffffff17] shadow-[0px_4px_10px_#00000040] w-[284px] h-[72px] mx-auto md:ml-[33px] p-3">
                            {[...Array(productData.rating)].map((_, index) => (
                                <StarIcon key={index} className="w-[38px] h-[43px] mx-1" fill="currentColor" />
                            ))}
                        </div>
                        <Button className="w-[504px] h-[116px] mt-16 mx-auto md:ml-[15px] bg-[#d6ad6059] rounded-[30px] hover:bg-[#d6ad60] transition-colors" onClick={handleCheckout}>
                            <span className="[-webkit-text-stroke:2px_#d9d9d9] font-['Inter',Helvetica] font-normal text-black text-[40px] text-center tracking-[0] leading-normal">
                                COMPRAR
                            </span>
                        </Button>
                        {protocolNumber && (
                            <p className="text-green-600 font-semibold text-center mt-4 text-2xl">Número do Protocolo: {protocolNumber}</p>
                        )}
                    </div>
                    <Card className="md:w-1/2 bg-[#bf8c5033] shadow-[0px_4px_10px_#00000040] border-none mt-8 md:mt-0">
                        <CardContent className="p-12">
                            <img className="w-full max-w-[447px] h-auto mx-auto object-cover" alt="Pulseira Mística" src={productData.image} />
                            <p className="mt-16 font-['Montserrat',Helvetica] font-medium text-black text-3xl tracking-[3.90px] leading-normal">
                                {productData.shortDescription}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Product Description */}
                <Card className="mt-16 mx-4 md:mx-20 bg-white rounded-[40px] border-2 border-solid border-black">
                    <CardContent className="p-6 md:p-8">
                        <p className="font-['Baloo_Paaji_2',Helvetica] font-normal text-black text-[40px] whitespace-pre-line leading-normal">
                            {productData.description}
                        </p>
                    </CardContent>
                </Card>

                {/* Footer */}
                <footer className="w-full h-[100%] bg-[#2a2a2a] text-white px-[10%] pt-[87px]">
                    <div className="flex justify-between">
                        {Object.entries(footerData).map(([section, items]) => (
                            <div key={section}>
                                <h3 className="font-['Montserrat',Helvetica] font-semibold text-xl mb-[33px]">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                                <ul className="space-y-[27px]">
                                    {items.map((item, index) => (
                                        <li key={index} className="font-['Montserrat',Helvetica] font-normal text-xs">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </footer>
            </div>
        </div>
    );
};
