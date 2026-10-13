import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { MOCK_NEWS } from "../../data/mock";

export function News() {
    return <section className="py-2">
        <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <SectionTitle
                    title="Informativo Shalom"
                    subtitle="Notícias, testemunhos, formações e novidades da Missão Salvador."
                    className="mb-0"
                />
                <Button
                    as={Link}
                    to="/informativo"
                    variant="outline"
                    className="self-start sm:self-auto text-sm py-2 px-4 whitespace-nowrap"
                >
                    Ver todas as notícias →
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {MOCK_NEWS.map((news) => (
                    <Link
                        key={news.id}
                        to={news.href}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
                    >
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-semibold text-shalom-orange mb-2">
                                {news.date}
                            </span>
                            <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-3 leading-snug">
                                {news.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                {news.description}
                            </p>
                            <div className="mt-auto pt-2">
                                <span className="text-shalom-orange text-sm font-medium inline-flex items-center group-hover:underline">
                                    Leia mais →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    </section>
}