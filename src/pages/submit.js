import SubmitPage from 'templates/Contact/SubmitPage'

export default function Submit() {
  return <SubmitPage />
}

Submit.getInitialProps = async ctx => {
  console.log(ctx)
  return {}
}
