export const formatPrice  = (amount: number)=>{

    return Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
    }).format(amount);
}