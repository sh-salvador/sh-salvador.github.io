import { PLACEHOLDER_IMAGES } from '../../data/mock';
import { Container } from '../Container';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export function Hero() {
    return <section className="relative min-h-[520px] sm:min-h-[600px] flex items-center bg-deep-dark text-white overflow-hidden">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0">
            <img
                src={PLACEHOLDER_IMAGES.heroBg}
                alt="Comunidade Shalom Salvador"
                className="w-full h-full object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-dark/95 via-deep-dark/80 to-transparent" />
        </div>

        <Container className="relative z-10 py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Conteúdo Principal do Hero */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="inline-block">
                        <span className="text-xs uppercase tracking-widest text-warm-cream font-medium bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/15">
                            Comunidade Católica Shalom
                        </span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                        MISSÃO <span className="text-shalom-orange">Shalom</span> SALVADOR
                    </h1>

                    <p className="text-lg sm:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                        Uma presença de paz, evangelização e comunhão.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                        <Button as={Link} to="/a-missao" variant="primary" className="text-base shadow-lg">
                            Conheça a Missão →
                        </Button>
                        <Button
                            as={Link}
                            to="/programacao"
                            variant="outline-light"
                            className="text-base"
                        >
                            Veja a Programação →
                        </Button>
                    </div>
                </div>

                {/* Elemento Decorativo na Direita (Desktop) */}
                <div className="hidden lg:flex lg:col-span-4 justify-end items-center">
                    <div className="transform rotate-3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl max-w-xs text-center">
                        <p className="font-display text-2xl text-warm-cream leading-snug">
                            "Aqui tem lugar pra você!"
                        </p>
                        <span className="block mt-2 text-xs text-white/70 uppercase tracking-widest font-sans">
                            Seja bem-vindo
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}