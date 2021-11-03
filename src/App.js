import Header from './components/Header/Header';
import LeftMenu from './components/LeftMenu/LeftMenu';
import Workspace from './components/Workspace/Workspace';

function App() {
    return (
        <div className="pb-10">
            <div className="px-10 bg-white">
                <Header />
            </div>
            <div className="flex flex-col">
                <div className="flex justify-start">
                    <LeftMenu />
                    <Workspace />
                </div>
            </div>
        </div>
    );
}

export default App;
