import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Страница'
}

export default function PageProducs({ params }: {params: {alias: string}}) {
  return (
    <div>
      Страница с alias {params.alias}
    </div>
  )
}