import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "dark" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group  "
      style={
        {
          "--normal-bg": "#000000c9",
          "--normal-text": "#5EC2B5",
          "--normal-border": "white ",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
