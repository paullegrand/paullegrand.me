interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Container = ({ children }: Props) => (
  <div className="mx-auto max-w-2xl p-4 sm:p-8 lg:max-w-7xl">{children}</div>
)
