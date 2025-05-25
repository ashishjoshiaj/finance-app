import { useMemo } from "react"

export const useFormatCurrency = (amount) => {
  const formatCurrency = (amount) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'INR' }).format(amount)

  return useMemo(
    () => formatCurrency(amount),
    [amount]
  )
}