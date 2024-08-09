
export default function DispatchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen">
      {children}
    </div>
  );
}
