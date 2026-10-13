import { MOCK_QUICK_ACCESS } from "../../data/mock";
import { Link } from "react-router-dom";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";

export function QuickAccess() {

    return <section className="py-2">
        <Container>
            <SectionTitle
                title="O que você procura?"
                subtitle="Acesse rapidamente as principais informações da missão."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {MOCK_QUICK_ACCESS.map((item) => (
                    <Link
                        key={item.id}
                        to={item.href}
                        className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-shalom-orange/30 transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
                    >
                        <div>
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 border ${item.colorBg}`}>
                                {item.icon}
                            </div>
                            <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {item.description}
                            </p>
                        </div>
                        <div className="pt-2 text-shalom-orange font-semibold text-lg flex items-center justify-end group-hover:translate-x-1 transition-transform">
                            →
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    </section>
}