"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useTheme } from "next-themes";
import { FaDirections } from "react-icons/fa";

interface Location {
  mapCenter: {
    latitude: number;
    longitude: number;
  };
  pointer: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
  description: string;
  address: string;
  link: string;
}

interface MapBlockProps {
  location: Location;
  googleMapApiKey: string;
}

const MapBlock: React.FC<MapBlockProps> = ({ location, googleMapApiKey }) => {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: googleMapApiKey });
  const { theme } = useTheme();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="relative">
      <div className="w-full">
        {googleMapApiKey && (
          <GoogleMap
            key={`${theme}-google-maps`}
            zoom={location.pointer.zoom}
            center={{
              lat: location.mapCenter.latitude,
              lng: location.mapCenter.longitude,
            }}
            options={{
              disableDefaultUI: true,
              disableDoubleClickZoom: true,
              scrollwheel: false,
              draggable: false,
              colorScheme: theme === "dark" ? "DARK" : undefined,
              styles: [
                {
                  stylers: [
                    // { lightness: 20 },
                    { visibility: "on" },
                    // { gamma: 0.9 },
                    { weight: 2 },
                  ],
                },
                {
                  elementType: "labels",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "water",
                  stylers: [{ color: "#5dc7ff" }],
                },
                {
                  featureType: "road",
                  stylers: [{ visibility: "on" }],
                },
                {
                  featureType: "road",
                  elementType: "labels",
                  stylers: [{ visibility: "on" }],
                },
              ],
            }}
            mapContainerStyle={{ height: "640px", width: "100%" }}
          >
            <Marker
              position={{
                lat: location.pointer.latitude,
                lng: location.pointer.longitude,
              }}
              title={location.name}
              // icon={{
              //   url: "/icons/marker.svg",
              //   scaledSize: new window.google.maps.Size(36, 36),
              // }}
            />
          </GoogleMap>
        )}
      </div>

      <div className="relative mx-auto max-w-6xl transition-transform duration-500">
        <div className="absolute bottom-5 left-5">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg max-w-[320px] shadow-lg">
            <h2 className="text-xl font-semibold">{location.name}</h2>
            <p>{location.description}</p>
            <div className="flex justify-between mt-6 gap-4">
              <span>{location.address}</span>
              <a
                href={`${location.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDirections className="w-12 h-12 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
