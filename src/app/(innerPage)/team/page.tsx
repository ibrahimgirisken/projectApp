import PageTitle from "@/components/sections/pageTitle"
import TeamesTwo from "@/components/sections/teames/teamesTwo"

const Team = () => {
  return (
    <>
        <PageTitle title="Our Team" currentPage="Our Team"/>
        <TeamesTwo isTitleShow={false}/>
    </>
  )
}

export default Team