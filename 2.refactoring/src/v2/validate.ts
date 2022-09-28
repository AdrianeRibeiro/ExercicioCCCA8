function sanitizeCpf(cpf: string) {
    return cpf.replace(/\D/g,"")
}

function allDigitsEqual(cpf: string) {
    const [firstDigit] = cpf
    return cpf.split("").every(digit => digit === firstDigit)
}

function validLength(cpf: string) {
    return cpf.length === 11
}

function extractDigit(cpf: string) {
    return cpf.slice(9)
}

function calculateDigit(cpf: string, factor: number) {
    let total = 0
    for(const digit of cpf) {
        if(factor > 1) total += parseInt(digit) * factor--
    }

    const rest = total % 11
    
    return (rest < 2) ? 0 : 11 - rest
}

export function validate (cpf: string) {
    if (!cpf) return false
    cpf = sanitizeCpf(cpf)

    if (!validLength(cpf)) return false
    if (allDigitsEqual(cpf)) return false

    const dg1 = calculateDigit(cpf, 10)
    const dg2 = calculateDigit(cpf, 11)

    const checkDigit = extractDigit(cpf) 
    const calculatedDigit = `${dg1}${dg2}`
    return checkDigit == calculatedDigit
}