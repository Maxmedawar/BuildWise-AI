interface Props {
  name: string
  address: string
  status: string
  updatedAt: string
}

export default function ProjectCard({ name, address, status, updatedAt }: Props) {
  return (
    <div className="rounded-2xl bg-white p-4 text-blue-900 shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">{address}</p>
      <p className="mt-2 text-sm">Status: {status}</p>
      <p className="text-xs">Updated {updatedAt}</p>
    </div>
  )
}
