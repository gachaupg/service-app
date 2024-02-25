import Complex from "./Complex"
import Welcome from "./Welcome"
import WhyChooseUs from "./WhyChooseUs"
import Hero from "./hero"

const Home = () => {
  return (
    <div className="home">
        <Hero/>
        <Welcome/>
        <Complex/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home