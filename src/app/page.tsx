import { redirect } from 'next/navigation'

export default async function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  redirect(`${basePath}/onboarding`)
}