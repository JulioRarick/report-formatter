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
      const htmlContent = `
    <div style="text-align: justify;">${formattedText}</div>
  `

      const blob = new Blob([htmlContent], { type: 'text/html' })
      const data = [new ClipboardItem({ 'text/html': blob })]

      navigator.clipboard.write(data).then(() =>
        toast({
          title: 'Texto copiado',
          description:
            'O texto foi copiado para a área de transferência com formatação.',
        }),
      )
      setFormattedText('')
    } catch (error) {
      toast({
        title: 'Erro ao copiar',
        description: 'Não foi possível copiar o texto formatado.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <article className="container grid-cols-2 lg:grid lg:p-6">
        <div className="grid w-full gap-1.5 p-4 lg:px-8 lg:py-2">
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
        <div className="grid w-full select-none gap-1.5 py-4 lg:px-8 lg:py-2">
          <Label
            htmlFor="formatted"
            className="flex items-center gap-1 px-3 text-sm font-medium tracking-tight text-gray-500 lg:text-lg"
          >
            <Pin className="h-5 w-5 text-sky-600" />
            Relatório formatado
          </Label>
          <div
            id="formatted"
            className={`h-64 w-full overflow-y-auto rounded-md border border-gray-300 p-4 shadow-lg dark:border-gray-500 lg:h-96 ${
              formattedText
                ? 'text-justify text-gray-950'
                : 'flex items-center justify-center text-sky-700'
            }`}
          >
            {formattedText || 'Seu texto aparecerá aqui ...'}
          </div>
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
