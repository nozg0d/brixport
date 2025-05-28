import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="lg:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
