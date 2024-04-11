"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
      <p className="text-lg mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 "
        onClick={handleGoBack}
      >
        Volver
      </button>
    </div>
  );
}
