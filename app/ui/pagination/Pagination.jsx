"use client"
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({count}) => {
  const selectedPage = "w-[40px] h-[40px] flex items-center justify-center text-xs font-medium text-white bg-[#B88E2F] cursor-pointer rounded-lg";
  const notSelectedPage = "w-[40px] h-[40px] flex items-center justify-center text-xs font-medium text-black bg-[#F9F1E7] cursor-pointer rounded-lg";
  
  // devuelve los parámetros de consulta, en este caso
  // será el valor de "page". Ejemplo:
  // http://localhost:3000/products?page=1 --> devuelve 1
  const searchParams = useSearchParams();
  
  const [page, setPage] = useState(1);
  
  // en este caso se utiliza para reemplazar el valor de page
  // para cambiar de página
  const { replace } = useRouter();

  // devuelve la ruta actual, en este caso "/products"
  const pathname = usePathname();

  // page = searchParams.get("page") || 1;
  const ITEMS_PER_PAGE = 5;

  const params = new URLSearchParams(searchParams);
  
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  const totalPagesArray = Array.from({length: totalPages}, (_, index) => index + 1)
  
  useEffect(() => {
    params.set("page", parseInt(page));
    replace(`${pathname}?${params}`)
  }, [page])

  return (
    <div className='flex flex-row items-center gap-3 mt-5 justify-center'>
      {totalPagesArray.map((item) => (
        <button onClick={() => setPage(item)} className={page === item ? selectedPage : notSelectedPage}>{item}</button>
      ))}
    </div>
  );
}

export default Pagination;
