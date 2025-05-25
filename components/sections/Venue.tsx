import MapBlock from "../MapBlock";

export default function Venue() {
  return (
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
      <div>
        <div className="mx-auto max-w-7xl mb-8 px-8 md:px-20">
          <h1 className="text-2xl font-semibold">Địa điểm (dự kiến)</h1>
        </div>
        <MapBlock
          location={{
            mapCenter: {
              latitude: 21.017830590027167,
              longitude: 105.84193181415745,
            },
            pointer: {
              latitude: 21.017830590027167,
              longitude: 105.84193181415745,
              zoom: 18,
            },
            name: "Hotel du Parc HaNoi",
            description: "Jul 17, 2025",
            address: "84 P. Trần Nhân Tông, Nguyễn Du, Hai Bà Trưng, Hà Nội",
            link: "https://maps.app.goo.gl/2xd7ihaHqDyiQrkr6",
          }}
          googleMapApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        />
      </div>
    )
  );
}
