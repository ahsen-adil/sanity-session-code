import { client } from "@/sanity/lib/client";
import Image from "next/image";

async function getdata(){
  const fetchData = await client.fetch(`*[_type == 'prodects']{
  title,
  description,  
  "imageUrl": image.asset->url
}`)
  return fetchData
}

export default async function Prodect() {
  const data = await getdata();
  console.log(data)
  return (
    <>
    <div className="gap-5 grid lg:grid-cols-3 p-12">
      {
        data.map((val:any,i:any)=>{
           return (
           <>
<div key={data.i} className="w-[300px] h-[420px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image className="rounded-t-lg h-[200px] w-[300px]" src={val.imageUrl} alt="image" width={200} height={200}/>
  </a>
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {val.title}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {val.description}
    </p>
    <a
      href="#"
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add to cart
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
</div>

            </>
           )
        })
      }
    </div>
    </>
  );
}
