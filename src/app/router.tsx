import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage'
import NotFoundPage from '@/pages/NotFoundPage'

/**
 * Application router.
 *
 * Only the landing page is implemented for now. The commented routes below
 * are intentionally left as a blueprint for the future web dashboard so the
 * architecture can grow without being restructured:
 *
 *   /login                                   -> auth
 *   /app/projects                            -> project list
 *   /app/projects/:projectId                 -> project details
 *   /app/projects/:projectId/works           -> works management
 *   /app/projects/:projectId/members         -> members management
 *   /app/projects/:projectId/analytics       -> analytics
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  // Future dashboard routes (not implemented yet):
  // { path: '/login', element: <LoginPage /> },
  // {
  //   path: '/app',
  //   element: <DashboardLayout />,
  //   children: [
  //     { path: 'projects', element: <ProjectsPage /> },
  //     { path: 'projects/:projectId', element: <ProjectDetailsPage /> },
  //     { path: 'projects/:projectId/works', element: <WorksPage /> },
  //     { path: 'projects/:projectId/members', element: <MembersPage /> },
  //     { path: 'projects/:projectId/analytics', element: <AnalyticsPage /> },
  //   ],
  // },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
