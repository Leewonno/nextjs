export default function Layout(props: LayoutProps<'/'>) {
  return (
    <section>
      {props.children}
    </section>
  )
}