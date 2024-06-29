import axios from "axios"
import { useEffect, useState } from "react"


const Gallery = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);
    


  return (
    <div>Gallery</div>
  )
}

export default Gallery