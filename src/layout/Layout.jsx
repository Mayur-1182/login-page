function Layout({ children, className }) {
  return (
    <>
      <main className={className || ""}>{children}</main>
    </>
  );
}

export default Layout;
