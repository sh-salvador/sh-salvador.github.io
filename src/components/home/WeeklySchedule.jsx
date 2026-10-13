import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { MOCK_WEEKLY_SCHEDULE } from "../../data/mock";

export function WeeklySchedule() {
    return <section className="py-12 bg-warm-cream/30 rounded-3xl border border-warm-cream/50">
        <Container>
            <SectionTitle
                title="Programação"
                subtitle="Confira a nossa programação semanal."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {MOCK_WEEKLY_SCHEDULE.map((block) => (
                    <div
                        key={block.id}
                        className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 ${block.borderAccent}`}
                    >
                        <h4 className="font-display text-lg text-deep-dark mb-4">
                            {block.category}
                        </h4>

                        <ul className="space-y-2">
                            {block.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-sm"
                                >
                                    <span className="text-deep-dark/80">{item.label}</span>
                                    {item.value && (
                                        <span className="font-semibold text-shalom-blue whitespace-nowrap">
                                            {item.value}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Button
                    as={Link}
                    to="/programacao"
                    variant="secondary"
                    className="px-8 shadow-md"
                >
                    Ver programação completa →
                </Button>
            </div>
        </Container>
    </section>
}