import { Link } from "react-router-dom";
import { Container } from "../Container";
import { Button } from "../Button";
import { SectionTitle } from "../SectionTitle";
import { formatDate } from "../../lib/formatDate";
import { getEvents } from "../../lib/content";

const events = getEvents();

export function UpcomingEvents() {
    return <section className="py-2 bg-slate-50/50">
        <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <SectionTitle
                    title="Próximos Eventos"
                    subtitle="Não perca o que está acontecendo na missão."
                    className="mb-0"
                />
                <Button
                    as={Link}
                    to="/programacao"
                    variant="outline"
                    className="self-start sm:self-auto text-sm py-2 px-4 whitespace-nowrap"
                >
                    Ver todos os eventos →
                </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.slice(0, 4).map((event) => {
                    const { day, month } = formatDate(event.date)
                    return (
                        <Link
                            key={event.slug}
                            to={event.href || '/programacao'}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-shalom-orange"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 bg-white text-deep-dark rounded-xl px-3 py-1.5 text-center shadow-md border border-gray-100">
                                    <span className="block font-display text-xl font-bold leading-none text-shalom-blue">
                                        {day}
                                    </span>
                                    <span className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                                        {month}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-display text-xl text-deep-dark group-hover:text-shalom-orange transition-colors mb-3">
                                    {event.title}
                                </h3>

                                <div className="space-y-1 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center space-x-1.5">
                                        <span>🕐</span>
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center space-x-1.5">
                                        <span>📍</span>
                                        <span>{event.location}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="mt-auto pt-2">
                                    <span className="text-shalom-orange text-sm font-medium inline-flex items-center group-hover:underline">
                                        Saiba mais →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Container>
    </section>
}