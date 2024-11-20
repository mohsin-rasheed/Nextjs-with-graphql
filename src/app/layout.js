import LayoutWrapper from '../components/LayoutWrapper'; // Import the client-side layout wrapper

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  );
}
