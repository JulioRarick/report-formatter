'use client'

import { ArrowDown, Pin } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formatText } from '@/hooks/format-text'
import { useToast } from '@/hooks/use-toast'

import { Button } from './ui/button'

export function TextareaLogic() {
  const { toast } = useToast()

  const [inputText, setInputText] = useState<string>('')
  const [formattedText, setFormattedText] = useState<string>('')

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const rawText = event.target.value

    setInputText(rawText)
  }

  function handleFormatReport() {
    setFormattedText(formatText(inputText))
  }

  function copyToClipboard(formattedText: string) {
    try {
      navigator.clipboard.writeText(formattedText)
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

  return (
    <>
      <article className="container grid-cols-2 lg:grid lg:p-6">
        <div className="grid w-full gap-1.5 py-6 lg:px-8 lg:py-2">
          <Label
            htmlFor="report"
            className="flex items-center gap-1 px-3 text-sm font-medium tracking-tight text-gray-500 lg:text-lg"
          >
            <ArrowDown className="h-5 w-5 animate-bounce text-sky-600" />
            Cole aqui o relatório para ser formatado
          </Label>
          <Textarea
            id="report"
            className="h-64 w-full p-4 shadow-lg placeholder:text-gray-400 lg:h-96"
            placeholder="Ctrl + V para colar ..."
            onChange={(event) => handleTextareaChange(event)}
          />
          <div className="flex w-full items-center justify-center py-6">
            <Button
              variant="default"
              className="shadow-md"
              onClick={handleFormatReport}
            >
              Formatar relatório
            </Button>
          </div>
        </div>
        <div className="grid w-full gap-1.5 py-6 lg:px-8 lg:py-2">
          <Label
            htmlFor="formatted"
            className="flex items-center gap-1 px-3 text-sm font-medium tracking-tight text-gray-500 lg:text-lg"
          >
            <Pin className="h-5 w-5 text-sky-600" />
            Relatório formatado
          </Label>
          <Textarea
            id="formatted"
            className="h-64 w-full p-4 shadow-lg placeholder:text-center placeholder:text-gray-400 lg:h-96"
            placeholder="Seu texto aparecerá aqui ..."
            value={formattedText}
            readOnly
          />
          <div className="flex w-full items-center justify-center py-6">
            <Button
              variant="default"
              className="shadow-md"
              onClick={() => copyToClipboard(formattedText)}
            >
              Copiar texto formatado
            </Button>
          </div>
        </div>
      </article>
    </>
  )
}
