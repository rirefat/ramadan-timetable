import MagfiratSection from '../MagfiratSection/MagfiratSection';
import NazwatSection from '../NazwatSection/NazwatSection';
import RahmatSection from '../RahmatSection/RahmatSection';
import './MainBody.css';

const MainBody = () => {
    
    return (
        <div className='main-body'>
            <div className="left-section">
                <RahmatSection></RahmatSection>
                <MagfiratSection></MagfiratSection>
                <NazwatSection></NazwatSection>
            </div>
            <div className="right-section">Right Section</div>
        </div>
    );
};

export default MainBody;