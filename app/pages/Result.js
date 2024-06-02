import { useLoaderData, Link } from "react-router-dom"

export default function Services() {
  const services = useLoaderData()

  return (
    <div className="services">
      {services.map(service => (
    <Link to="/" key={service.id}>
        <p>{service.title}</p>
        <p>{service.price}</p>
      </Link>
      ))}
    </div>
  )
}

// loader function

export const servicesLoader = async () => {                       
  const res = await fetch('http://localhost:4000/services')

  return res.json
}