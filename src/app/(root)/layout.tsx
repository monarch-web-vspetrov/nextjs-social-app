import Navbar from "../../../components/Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        left side bar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 max-md:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        right side bar
      </div>
      toaster
    </main>
  );
}

export default Layout;