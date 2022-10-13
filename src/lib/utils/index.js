import numbro from "numbro";

export const formatXksAmount = (amount, digits = 2, round = false) => {
    if (amount === 0) return '0.00'
    if (!amount) return '-'

    return numbro(amount).format({
        average: round,
        mantissa: amount > 1000 ? 2 : digits,
        abbreviations: {
            million: 'M',
            billion: 'B',
        },
    })
}