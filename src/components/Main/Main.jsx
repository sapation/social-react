
import CreatePost from './CreatePost/CreatePost'
import Stories from './Stories/Stories'


import './main.css'
import { Feeds } from './Feeds/Feeds'

export const Main = () => {
  return (
    <div className='mainContainer'>
     <Stories/>
     <CreatePost/>
     <Feeds/>
    </div>
  )
}
