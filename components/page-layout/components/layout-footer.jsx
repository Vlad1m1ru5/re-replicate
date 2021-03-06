import AppContainer from "@components/app-container";

export default function LayoutFooter({ children }) {
  return (
    <>
      <hr />
      <footer className="py-4 bg-white">
        <AppContainer>
          <div className="flex flex-wrap justify-around">{children}</div>
        </AppContainer>
      </footer>
    </>
  );
}
