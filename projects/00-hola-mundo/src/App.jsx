import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [

  {
    
  userName : 'midudev',
  name: 'Miguel Angel Duran',
  isFollowing: true

  },

  {
    
  userName : 'lfranco00',
  name: 'Luis E. Franco R.',
  isFollowing: false

  },

  {
    
  userName : 'tefaorg',
  name: 'Estefania Ortiz',
  isFollowing: true

  },

  {
    
  userName : 'vxnder',
  name: 'Vanderhart',
  isFollowing: false

  },

]

export function App () {
  
  return (
    <section className='App'>
      {
        users.map(({userName, name, isFollowing}) => (
            <TwitterFollowCard
            key={userName}
              userName = {userName}
              initialIsFollowing = {isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
    </section>
    
  )
}