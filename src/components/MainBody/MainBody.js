import useDoa from '../../Hooks/useDoa';
import Doa from '../Doa/Doa';
import MagfiratSection from '../MagfiratSection/MagfiratSection';
import NazwatSection from '../NazwatSection/NazwatSection';
import RahmatSection from '../RahmatSection/RahmatSection';
import './MainBody.css';

import AreaSection from '../AreaSection/AreaSection';

const MainBody = () => {
    const [doa, setDoa] = useDoa();

    return (
        <div className='main-body'>
            <div className="left-section">
                <div className="location-single-column">
                    <AreaSection></AreaSection>
                </div>
                <RahmatSection></RahmatSection>
                <MagfiratSection></MagfiratSection>
                <NazwatSection></NazwatSection>
            </div>

            <div className="right-section">
                {/* <div className="area-section">
                    <div className="location">
                        <img src={locationImg} alt="" />
                        <h3>Dhaka</h3>
                    </div>
                    <div className="area-selection">
                    </div>
                </div> */}
                <div className="location-double-column">
                    <AreaSection></AreaSection>
                </div>

                <div className="doa-section">
                    {
                        doa.map(singleDoa => <Doa key={singleDoa.serial} singleDoa={singleDoa}></Doa>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainBody;