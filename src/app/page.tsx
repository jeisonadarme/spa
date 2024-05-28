import Image from "next/image";

export default function Home() {

    let massagesList = [
        {
            name: "Azafrán",
            description: "Devuélvele la energía a tu cuerpo, este masaje se realizará con aceites calientes que suavizan y regeneran tu piel. Esta técnica se enfocará en tus músculos realizando con presión en tu zona muscular, lumbar y abdominal. Disfrutarás de una ducha fría al finalizar.",
            duration: "60 Min",
            price: "$180,000",
            image: "/azafranico.svg",
            notes: "Masajista en lencería"
        },
        {
            name: "Índigo",
            description: "Está técnica te dejará sin aliento realizando un masaje cuerpo a cuerpo con piernas abdomen y pecho, sentirás sensaciones diferentes por todo tu organismo con (plumas, pétalos, piedras volcánicas) incluye estimulación manual disfrutarás sensaciones únicas que te harán llegar lejos y una rica ducha con la masajista.",
            duration: "60 Min",
            price: "$280,000",
            image: "/indigoico.svg",
            notes: "Masajista desnuda y cóctel de bienvenida"
        },
        {
            name: "Lirio de fuego",
            description: "Tu masajista saldrá en ropa interior, Te hará sentir con los dedos sensaciones únicas y diferentes, donde disfrutarás de relajación total incluyendo exfoliación, piedras volcánicas y masaje sensorial (Estimulación Manual).",
            duration: "50 Min",
            price: "$230,000",
            image: "/liriodefuegoico.svg",
            notes: "Masajista en lencería"
        },
        {
            name: "Cuantro Lirios",
            description: "¡Déjalo a tu imaginación! Con 2 masajistas donde recorrerán todo tu cuerpo, Duplicarás tus orgasmos y sentirás 4 manos que llegarán a una estimulación manual. Disfruta una rica ducha con las dos masajistas.",
            duration: "70 Min",
            price: "$300,000",
            image: "/4liriosico.svg",
            notes: "Dos masajistas desnudas"
        },
        {
            name: "Hiedra",
            description: "¡Déjate llevar tu serás el masajista! Durante los 60 minutos que tendrás vivirás un experiencia única e inigualable con la masajista semidesnuda realizarán un delicioso masaje a la que está desnuda. Ellas finalizarán con una estimulación manual hacia ti disfrútalo.",
            duration: "70 Min",
            price: "$300,000",
            image: "/hidraico.svg",
            notes: "Una masajista desnuda y otra semidesnuda"
        },
        {
            name: "Cataleya",
            description: "Deléitate con un delicioso masaje Cataleya basado en cuerpo a cuerpo recorriendo todo tu organismo con una estimulación manual que te hará desatar todos tus sentidos y al final disfrutarás de una rica ducha con la masajista.",
            duration: "90 Min",
            price: "$320,000",
            image: "/cataleyaico2.svg",
            notes: "Masajista desnuda y cóctel de bienvenida"
        },
        {
            name: "En Pareja",
            description: "Sal de la monotonía con tu pareja, realizando esta técnica erótica e intensa donde se le realizará el masaje a uno de los dos mientras el otro se deleita observando, su pareja podrá interactuar en el momento que desee finalizando con una fantasía adicional.",
            duration: "80 Min",
            price: "$290,000",
            image: "/parejaico.svg",
            notes: "Masajista desnuda y copa de vino"
        }
    ]

    let flowersList = [
        {
            name: "Cataleya",
            description: "Con un estilo exótico y apasionado, Cataleya te invita a explorar una experiencia sensorial única. Sus masajes son intensos y vigorizantes, perfectos para quienes buscan una profunda conexión entre el cuerpo y el alma, desbloqueando energías y revitalizando tu esencia.",
            image: "/modelos/cataleya.jpg"
        },
        {
            name: "Menta",
            description: "Con su toque refrescante y revitalizante, Menta es perfecta para quienes buscan una experiencia rejuvenecedora. Su técnica es ideal para aliviar tensiones y revitalizar el cuerpo, dejándote con una sensación de frescura y renovación.",
            image: "/modelos/menta.jpg"
        },
        {
            name: "Rosse",
            description: "Elegante y clásica, Rosa ofrece masajes que combinan suavidad y profundidad. Sus movimientos precisos y delicados son perfectos para quienes desean una experiencia relajante que también trabaje en las capas más profundas del músculo, brindando alivio y confort.",
            image: "/modelos/rosse.jpg"
        },
        {
            name: "Jazmin",
            description: "Jazmín es sinónimo de serenidad y paz. Sus masajes están diseñados para inducir una profunda relajación y calma. Ideal para aquellos que buscan desconectar del estrés diario y sumergirse en un oasis de tranquilidad.",
            image: "/modelos/jazmin.jpg"
        },
        {
            name: "Sakura",
            description: "Inspirada en la flor del cerezo, Sakura ofrece una experiencia delicada pero efectiva. Sus técnicas orientales y su enfoque en la armonía del cuerpo y la mente te ayudarán a encontrar el equilibrio perfecto, liberando tensiones y revitalizando tu espíritu.",
            image: "/modelos/sakura.jpg"
        }
    ]


    return (
        <main>
            <nav id="header" className="w-full z-30 top-0 py-1 rounded-lg">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3 rounded-lg">
                    <div className="order-1 md:order-2">
                        <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                            VANESSA RIVERA SPA
                        </a>
                    </div>
                </div>
            </nav>
            <section className="hero-banner">
                <div className="background-image">
                    <div className="flex items-center h-full justify-center bg-gray-900 bg-opacity-30">
                        <div className="max-w-xl text-center">
                            <Image src="/logo.svg" width={400} height={400} alt="Body Massage" className="mx-auto" />

                            <p className="mt-2 text-white font-semibold">Ven y Disfruta de un deléitante masaje con las mejores flores de Medellín</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto p-4 md:p-8 mt-8">
                <div className="text-center mb-12">
                    <h1 className="text-gray-800">Ven y Explora</h1>
                    <h1 className="text-4xl font-bold mt-2 font-color-green">Nuestros Diferentes Tipos De Masajes</h1>
                    <p className="text-gray-700 mt-4">Cada masaje está diseñado para ofrecer una experiencia personalizada que se adapta a tus necesidades y deseos. Desde masajes relajantes y revitalizantes hasta experiencias sensoriales y eróticas, encontrarás el masaje perfecto para ti. Los precios y la duración varían según el tipo de masaje, permitiéndote elegir la opción que mejor se adapte a tu presupuesto y disponibilidad de tiempo. Ven y descubre cómo cada uno de nuestros masajes puede transformarte y revitalizar tu cuerpo y mente.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        massagesList.map((massage, index) => {
                            return (<div key={massage.name} className="group rounded-lg overflow-hidden shadow-lg bg-white md:bg-transparent md:shadow-none hover:shadow-lg hover:bg-white">
                                <Image src={massage.image} width={50} height={50} alt={massage.name} className="mx-auto mt-4 group-hover:animate-bounce" />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-center font-color-green">{massage.name}</h3>
                                    <p className="text-gray-700 mt-4 text-center md:min-h-60">{massage.description}</p>
                                    <p className="text-gray-600 mt-4 text-center">{massage.notes}</p>
                                    <div className="flex justify-between items-center mt-6 font-color-green border-t-2 pt-2 border-gray-300">
                                        <span>Duración: {massage.duration}</span>
                                        <span>Precio: {massage.price}</span>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </section>

            <section className="max-w-screen-xl mx-auto md:p-8 bg-white md:rounded mt-8">
                <div className="text-center mb-12 pt-4">
                    <h1 className="text-gray-800">La mejor experiencia con</h1>
                    <h1 className="text-4xl font-bold mt-2 font-color-green">Nuestras Flores</h1>
                    <p className="text-gray-700 mt-4 p-4">En nuestro spa, entendemos que cada persona es única y merece un tratamiento que se ajuste a sus necesidades individuales. La diversidad de nuestras masajistas garantiza que encontrarás la técnica y el estilo que mejor se adapten a ti, brindándote una experiencia de bienestar personalizada y memorable. Ven y descubre cuál de nuestras masajistas florece contigo.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        flowersList.map((flower, index) => {
                            return (<div key={flower.name} className="md:rounded-lg overflow-hidden bg-white md:bg-transparent md:shadow-none hover:shadow-lg hover:bg-white">
                                <Image src={flower.image} width={300} height={300} alt={flower.name} className="w-full custom-shape" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-center font-color-green">{flower.name}</h3>
                                    <p className="text-gray-600 mt-4 text-center md:min-h-30">{flower.description}</p>
                                    <a href="#" className="mx-auto flex items-center justify-center mt-4  py-2 px-4 font-color-green font-bold">Ver Más</a>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </section>
            <div className="fixed bottom-4 right-4 z-30 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://wa.me/573216336258?text=Estoy%20Interesado%20En%20Reservar%20Un%20Masaje" target="_blank" rel="noopener noreferrer" className="flex justify-center">
                    <div className="bg-white rounded p-4 font-bold font-color-green">
                        <p className="text-center">Reserva tu cita</p>
                    </div>
                    <svg width="60px" height="60px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" />
                        <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" />
                        <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" />
                        <defs>
                            <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#739037" />
                                <stop offset="1" stopColor="#739037" />
                            </linearGradient>
                        </defs>
                    </svg>
                </a>
            </div>
            <section className="mt-8">
                <iframe className="w-full map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4426164478023!2d-75.58604852301745!3d6.20519859378259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46827851a03f1d%3A0xeedaa11604e26984!2sEdificio%202%20Sur!5e0!3m2!1ses!2sco!4v1716397252079!5m2!1ses!2sco" height="500" loading="lazy"></iframe>
                <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill="#ffffff" className="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                    </svg>
                </div>
            </section>
            <footer className="bg-white text-gray-400 py-8 relative">

                <div className="container mx-auto px-6 pt-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3">
                            <h5 className="text-xl font-bold mb-4">Contacto</h5>
                            <p className="mb-2">Teléfonos: 321 633 62 58 / 324 315 45 54</p>
                            <a href="https://linktr.ee/vanessariveraspa" target="blank">Click aqui para ver todos nuestro canales</a>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h5 className="text-xl font-bold mb-4">Síguenos</h5>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/vanessariveraspa/" target="blank" className="hover:text-gray-400">
                                    <Image src="/instagram.svg" width={40} height={40} alt="Instagram" className="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center w-full border-t border-gray-400 pt-4">
                        <p>&copy; 2024 Ejemplo Spa de Masajes. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

        </main>
    );
}
