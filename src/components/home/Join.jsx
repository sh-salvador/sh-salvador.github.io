import { Container } from "../Container";
import { Button } from "../Button";
import { PLACEHOLDER_IMAGES } from "../../data/mock";
import { Link } from "react-router-dom";

export function Join() {
    return <section className="py-2">
        <Container>
            <div className="relative rounded-3xl bg-shalom-blue text-white overflow-hidden p-8 sm:p-12 lg:p-16 shadow-xl">
                {/* Background Pattern / Imagem Overlay Sutil */}
                <div className="absolute inset-0 opacity-10">
                    <img
                        src={PLACEHOLDER_IMAGES.joinBg}
                        alt="Background Faça Parte"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Lado Esquerdo: Chamada */}
                    <div className="lg:col-span-5 space-y-4">
                        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                            Faça Parte da Missão
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Existem várias formas de participar e apoiar esta obra.
                        </p>
                    </div>

                    {/* Lado Direito: Os 2 Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Card 1: Comunhão de Bens */}
                        <div className="bg-white text-deep-dark p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-orange-100 text-shalom-orange flex items-center justify-center text-2xl mb-4">
                                    🧡
                                </div>
                                <h3 className="font-display text-xl mb-2 text-deep-dark">
                                    Comunhão de Bens
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    Conheça essa forma de viver a partilha e colaborar com a missão.
                                </p>
                            </div>
                            <Button
                                as={Link}
                                to="/faca-parte"
                                variant="primary"
                                className="w-full text-xs sm:text-sm py-2.5 px-3 text-center"
                            >
                                Conheça a Comunhão de Bens →
                            </Button>
                        </div>

                        {/* Card 2: Benfeitor da Paz */}
                        <div className="bg-white text-deep-dark p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-sky-100 text-shalom-blue flex items-center justify-center text-2xl mb-4">
                                    💙
                                </div>
                                <h3 className="font-display text-xl mb-2 text-deep-dark">
                                    Benfeitor da Paz
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    Ajude a sustentar a obra de evangelização.
                                </p>
                            </div>
                            <Button
                                as={Link}
                                to="/faca-parte"
                                variant="secondary"
                                className="w-full text-xs sm:text-sm py-2.5 px-3 text-center"
                            >
                                Seja Benfeitor da Paz →
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}