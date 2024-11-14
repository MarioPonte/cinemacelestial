function Container({ children }) {
  return (
    <section className="text-white px-20 py-10 flex flex-col gap-10">
        {children}
    </section>
  );
}

export default Container;