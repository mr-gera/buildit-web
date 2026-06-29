import { RouterProvider } from 'react-router-dom'
import { QueryProvider } from '@/app/providers/QueryProvider'
import { LanguageProvider } from '@/i18n/context'
import { router } from '@/app/router'

export default function App() {
  return (
    <LanguageProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </LanguageProvider>
  )
}
