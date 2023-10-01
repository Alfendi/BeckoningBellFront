import { RequireAuth } from "@/components/utils"

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Props){
    return <RequireAuth>{children}</RequireAuth>
}

// Route protection using Redux state. When we first go onto the Dashboard page and we're still loading, then we hit our Verify route
// which determines whether we are authenticated or not. Then this page is returns. If false, then redirected to login page.

// Can put this layout in protected routes.