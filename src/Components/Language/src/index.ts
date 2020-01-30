interface LangItemProps {
  [text: string]: {
    [langId: string]: string
  }
}

interface LangsProps {
  [langId: string]: LangItemProps[]
}

const langs: LangsProps = require('./lang.json')
const langId = navigator.language.replace('-', '_')

export const gettext = (text: string, context: string = ''): string => {
  const id = `${context || ''}${text}`
  return (langs[id] && langs[id][langId]) || text
}
