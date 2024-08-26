import css from '../components/User.module.css'

export const SectionUser = ({children}) => {
  return (
    <section className={css.sectionUser}>
    {children}
        </section>
  )
}
