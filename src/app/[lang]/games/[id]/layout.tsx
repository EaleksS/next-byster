import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Game | Byster',
}


export default function GameLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}