import { toast } from './use-toast'

export async function copyToClipboard(formattedText: string) {
  try {
    await navigator.clipboard.writeText(formattedText)
    toast({
      title: 'Texto copiado',
      description: 'O texto foi copiado para a área de transferência.',
    })
  } catch (error) {
    toast({
      title: 'Erro ao copiar',
      description:
        'Ocorreu um erro ao copiar o texto para a área de transferência.',
      variant: 'destructive',
    })
  }
}
