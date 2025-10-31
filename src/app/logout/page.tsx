import { logoutAction } from '@/features/auth/actions/logout.action'
import { PageContainer } from '@/shared/layout'
import { Button } from '@/shared/ui/button'

export default function LogoutPage() {
  return (
    <PageContainer>
      <form action={logoutAction} className="flex justify-center items-center h-screen">
        <Button type="submit">Logout</Button>
      </form>
    </PageContainer>
  )
}
