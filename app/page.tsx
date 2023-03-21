import {FiSun} from 'react-icons/fi'
import {AiOutlineThunderbolt} from 'react-icons/ai'
import {BsExclamationTriangle} from 'react-icons/bs'
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">Ghis - AI </h1>
        <div className='flex space-x-2 text-center'>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <FiSun className='h-8 w-8'/>
                    <h2>Examples</h2>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>"Explain Something to me"</p>
                    <p className='infoText'>"What is the difference between a dog and a cat?"</p>
                    <p className='infoText'>"What is the color of the sun?"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <AiOutlineThunderbolt className='h-8 w-8'/>
                    <h2>Capabilities</h2>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>Change the ChatGPT Model to use</p>
                    <p className='infoText'>Messages are stored in the firebase's Firestore</p>
                    <p className='infoText'>Hot Toast notification when VhatGPT is thinking</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BsExclamationTriangle className='h-8 w-8'/>
                    <h2>Limitaions </h2>
                </div>
                <div className='space-y-2'>
                    <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
                    <p className='infoText'>Limited knowledge of the world and events after 2021</p>
                    <p className='infoText'>May ocaasionally generate incorrect information</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage