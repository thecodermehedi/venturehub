import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <section className="block text-left max-w-sm p-6 border border-gray-200 rounded-2xl shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight animation-pulse">
          <Skeleton width={150} />
        </h5>
        <p className="font-normal mb-2 w-fit px-4 animation-pulse">
          <Skeleton width={50} />
        </p>
      </div>
      <p className="font-normal mb-2 text-gray-700 animation-pulse">
        <Skeleton />
      </p>
      <p className="font-normal text-gray-700 pb-2 animation-pulse">
        <Skeleton />
      </p>
    </section>
  );
};

export default SkeletonCard;
