import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem";

const Home = () => {
  const [travelListings, setTravelListings] = useState([]);
  const [placementListings, setPlacementListings] = useState([]);
  const [fitnessListings, setFitnessListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(travelListings);

  useEffect(() => {
    const fetchTravelListings = async () => {
      try {
        const res = await fetch("/api/listing/get?travel=true&limit=10");
        const data = await res.json();
        setTravelListings(data);
        fetchPlacementListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchPlacementListings = async () => {
      try {
        const res = await fetch("/api/listing/get?placement=true&limit=10");
        const data = await res.json();
        setPlacementListings(data);
        fetchFitnessListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFitnessListings = async () => {
      try {
        const res = await fetch("/api/listing/get?fitness=true&limit=10");
        const data = await res.json();
        setFitnessListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTravelListings();
  }, []);

  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br />
          blogs with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Blog App is the best place to find your next perfect blogs to read.
          <br />
          We have a wide range of blogs for you to choose from.
        </div>
      </div>

      {/* swiper */}
      <Swiper navigation>
        {travelListings &&
          travelListings.length > 0 &&
          travelListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for travel, fitness and placements */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {travelListings && travelListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent Travelling Blogs
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {travelListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {placementListings && placementListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent blogs for placements
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {placementListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {fitnessListings && fitnessListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent blogs for fitness
              </h2>
            </div>
            <div className="flex flex-wrap gap-4">
              {fitnessListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
