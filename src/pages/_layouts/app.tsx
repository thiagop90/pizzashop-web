import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components/header'
import { api } from '@/lib/axios'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptoId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptoId)
    }
  }, [navigate])

  return (
    <div>
      <Header />

      <div className="mx-auto flex max-w-screen-xl flex-1 flex-col gap-4 p-6">
        <Outlet />
      </div>
    </div>
  )
}
