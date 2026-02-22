import { CircleLoader } from 'react-spinners';

const LoaderSpinner = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding: '10px'}} className='loader-container'>
            <CircleLoader size={30} color="#0057D9" />
        </div>
    );
}

export default LoaderSpinner;
