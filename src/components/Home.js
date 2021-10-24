import SearchBar from "./SearchBar";
import HomeMain from "./HomeMain";
import ErrorBoundary from "../ErrorBoundary";

function Home({ searchCB, weatherCB }) {
    return (
        <div>
            <ErrorBoundary>
                <SearchBar searchCB={searchCB} weatherCB={weatherCB} />
            </ErrorBoundary>

            <ErrorBoundary>
                <HomeMain />
            </ErrorBoundary>

        </div>
    );
}

export default Home;