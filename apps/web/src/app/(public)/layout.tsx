export default function PublicLayout(ps: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-black w-full h-10"></div>
      {ps.children}
    </div>
  )
}
