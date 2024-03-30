
import { homeData } from "./homeData";

const Home = () => {
  return (
    <main role="main">
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Savor the Flavor</h1>
          <p className="text-secondary">Your Ultimate Destination for Delectable Recipe Details</p>
          <p>Welcome to Savor the Flavor, your one-stop hub for culinary inspiration and mouthwatering recipes! Whether you&apos;re a seasoned chef or a novice in the kitchen, our website is designed to tantalize your taste buds and ignite your passion for cooking. Dive into a world of gastronomic delight as we present an array of meticulously crafted recipes, each brimming with flavor and creativity.</p>
          <p><a className="btn btn-primary btn-lg" href="/recipes" role="button">See Recipes »</a></p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            homeData && homeData.length > 0 && homeData.map((d) =>
              <div className="col-md-4" key={d.id}>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <p><a className="btn btn-secondary" href= {`/${d.navigate}`} role="button">{d.button} »</a></p>
              </div>
            )
          }
        </div>

        <hr />

      </div>

    </main>
  )
}

export default Home
