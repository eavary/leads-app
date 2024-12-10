import Image from 'next/image'

interface PageSectionProps {
  imageSrc: string
  altText: string
  title: string
  text?: string
  children: React.ReactNode
}

export default function PageSection({ title, text, imageSrc, altText, children }: PageSectionProps) {
  return (
    <div className="flex flex-col items-center max-w-lg w-full">
      <Image
        src={imageSrc}
        alt={altText}
        width={50}
        height={50}
      />
      <h2 className="text-lg font-semibold my-3">{title}</h2>
      {text && <p className="text-sm text-center font-semibold mb-3">{text}</p>}
      {children}
    </div>
  )
}
