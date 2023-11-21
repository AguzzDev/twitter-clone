import React from "react";
import { Layout } from "./Layout";

export const DeleteModal = ({
  title,
  description,
  children,
  open,
  setOpen,
}) => {
  return (
    <Layout open={open} setOpen={setOpen}>
      <section className="p-5">
        <h1 className="text-2xl font-semibold mb-1">{title}</h1>
        <p>{description}</p>

        <div className="flex justify-between gap-x-5 mt-10">
          {children}
          <button
            onClick={() => setOpen(false)}
            className="py-2 rounded-md w-full bg-graylight text-black font-semibold"
          >
            Cancelar
          </button>
        </div>
      </section>
    </Layout>
  );
};
