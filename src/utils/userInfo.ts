interface Technique {
  id: number
  name: string
  skillLevel: number
  color: string
}

interface User {
  id: number
  name: string
  username: string
  email: string
  techniques: Technique[]
}

export const users = [
 {
  id: 1,
  name: 'Adriana Roza Benites',
  username: 'Adriana',
  email: 'adriana.roza.aka@gmail.com',
  techniques: [
    {
      id: 1,
      name: 'Mawashi',
      skillLevel: 40,
      color: 'blue',
    },
    {
      id: 2,
      name: 'Mae Geri',
      skillLevel: 45,
      color: 'blue'
    },
    {
      id: 3,
      name: 'Gedan Barai Uke',
      skillLevel: 50,
      color: 'blue'
    },
    {
      id: 4,
      name: 'Zenkutsu Dachi',
      skillLevel: 70,
      color: 'blue'
    },
  ]
 }
]