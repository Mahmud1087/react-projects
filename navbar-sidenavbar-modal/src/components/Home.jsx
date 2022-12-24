import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './sidebarModalContext'

const Home = () => {
  const { openModal, openSideBar } = useGlobalContext()

  return (
    <main>
      <button className='sidebar-toggle' onClick={openSideBar}>
        <FaBars /> sidebar
      </button>
      <button className='btn' onClick={openModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
