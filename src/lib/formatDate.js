export function formatDate(dateString) {
    if (!dateString) return { day: '--', month: '---' }

    // Se vier no formato YYYY-MM-DD, split manual
    const parts = String(dateString).split('-')
    if (parts.length === 3) {
        const [year, month, day] = parts
        const monthName = new Date(year, month - 1, 1)
            .toLocaleString('pt-BR', { month: 'short' })
            .toUpperCase()
            .slice(0, 3)
        return { day: day.padStart(2, '0'), month: monthName }
    }

    // Fallback para outros formatos
    const date = new Date(dateString)
    if (isNaN(date)) return { day: '--', month: '---' }
    return {
        day: String(date.getDate()).padStart(2, '0'),
        month: date.toLocaleString('pt-BR', { month: 'short' }).toUpperCase().slice(0, 3),
    }
}