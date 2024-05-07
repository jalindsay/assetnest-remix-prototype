import {
  AvatarFallbackShad,
  AvatarImageShad,
  AvatarShad,
} from '~/components/ui/shadUi/ui/avatar'

interface ButtonProps {
  fallbackText: string
  imageSrc?: string
  imageAltText?: string
  onClick?: () => void
  className?: string
  imageClassName?: string
}

export function Avatar({
  fallbackText,
  imageSrc,
  imageAltText,
  onClick,
  className,
  imageClassName,
}: ButtonProps) {
  return (
    <AvatarShad className={className} onClick={onClick}>
      <AvatarImageShad
        src={imageSrc}
        alt={imageAltText}
        className={imageClassName}
      />
      <AvatarFallbackShad>{fallbackText}</AvatarFallbackShad>
    </AvatarShad>
  )
}
