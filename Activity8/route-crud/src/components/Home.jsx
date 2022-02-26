import CardHome from "./common/CardHome"

const Home = () => {
    return (
    <div className="mt-4">
        <div className="container">
        <h3 className="mb-4">A fundraising website :</h3>
        <CardHome  func = "Start a fundraiser" body = "Make a fundraiser for your cause!" url = "/create"/>
        <CardHome func = "View all" body = "See all the fundraisers" url = "/all"/>
      </div>
    </div>
    )
  }
  
  export default Home