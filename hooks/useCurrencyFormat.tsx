const useCurrencyFormat = (amount?: number, options?: any) => {
  const formatter = new Intl.NumberFormat('fr-FR', options);
  if (amount) return formatter.format(amount).replace(/\s/g, '.');
  return formatter.format(0).replace(/\s/g, '.');
  // return useMemo(() => formatter.format(amount).replace(/\s/g, '.'), [amount]);
}
export default useCurrencyFormat