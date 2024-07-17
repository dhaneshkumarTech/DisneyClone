type Props = {
  params: {
    id: number
  }
    searchParams: {
      genre: string,
    }
  }


function Genre({params: {id}, searchParams: {genre}}: Props) {

  // API call to get genre movies
  return (
    <div>Genre</div>
  )
}

export default Genre