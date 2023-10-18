"use client";

import LoadingForDataFetch from "@/components/Utlis/LoadingForDataFetch";

import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { CutText } from "@/utils/CutText";
import Image from "next/image";


const ServiceDetilesSingle = ({ params }: any) => {
  const { data: data, isLoading } = useGetSingleServiceQuery(
    params?.id ,{
      skip:!Boolean(params?.id)
    }
  );
  console.log(data);


  if (isLoading) {
    return <LoadingForDataFetch />;
  }
  return (
    <>
      <div className="container mx-auto  px-12">
        <div className="w-full rounded overflow-hidden shadow-lg">
          <section className="grid  grid-cols-1 xl:grid-cols-2">
            <div>
              <Image width={800} height={800} src={data?.image} alt="Transport Image" className="w-full" />
            </div>
            <div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data?.title}</div>
                <p className="text-gray-700 text-base">
                 {data?.description && CutText(data?.description,700)}
                </p>
                <p className="text-gray-700 mt-2">Price: {data?.price} tk</p>
                <p className="text-gray-700">Available Tickets: {data?.availableTickets}</p>
                <p className="text-gray-700">Contact: {data?.contact}</p>
                <p className="text-gray-700">
                  Service Date: {new Date(data?.serviceDate).toLocaleDateString()}
                </p>
                <p className="text-gray-700">Category: {data?.category?.title}</p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Status : ➡
                </span>
                <span className="inline-block bg-green-600 text-white  px-3 py-1 text-sm font-semibold capitalize">
                  {data?.status}
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceDetilesSingle;
