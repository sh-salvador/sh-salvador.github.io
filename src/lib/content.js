import matter from 'lite-matter'

// Carrega todos os .md da pasta de eventos
const eventModules = import.meta.glob('../content/eventos/*.md', {
    eager: true,
    query: '?raw',
    import: 'default'
})

export function getEvents() {
    return Object.entries(eventModules)
        .map(([path, raw]) => {
            const { data, content } = matter(raw)
            return {
                slug: path.split('/').pop().replace('.md', ''),
                ...data,
                body: content,
            }
        })
        .sort((a, b) => new Date(a.date) - new Date(b.date))
}