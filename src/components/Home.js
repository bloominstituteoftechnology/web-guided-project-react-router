// We'll need React Router's hook to navigate around

export default function Home() {

  // 👉 STEP 5 - Build a click handler that will imperatively navigate us to /items-list
  const routeToShop = () => {

  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt='store front'
      />
      <button onClick={routeToShop} className='md-button shop-button'>
        Shop now!
      </button>
    </div>
  )
}
