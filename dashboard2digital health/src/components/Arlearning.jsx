import React from "react";
import 

mgcms from "../assets/realistic_human_heart (1).glb"
import hamzatyellow from "../assets/mri.glb"
import dgc from "../assets/female_human_skeleton_-_zbrush_-_anatomy_study.glb"
import dosi from "../assets/doctors_stethoscope.glb"
import geig from "../assets/geigcount.glb"
import image1 from '../assets/chemical_spill.jpg'
import image2 from '../assets/biohazard.jpg'
import image3 from '../assets/radiological_disaster.jpg'
const Arlearning = () => {
    const scenarios = [
        {
            id: 1,
            title: 'Chemical Spill Response',
            image: image1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        {
            id: 2,
            title: 'Biological Hazard Training',
            image: image2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        {
            id: 3,
            title: 'Radiological Incident Drill',
            image: image3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod velit eu mauris cursus.',
        },
        // Add more scenarios as needed
    ];

    function handleClick(event) {
        event.preventDefault();
        // Handle click event here
      }
      
    return (
        <div>
            
            <div className=" md:ml-[20%]">
                <h1 className="mt-5 text-2xl text-center">
                    AR Visualization
                </h1>
                <div className='flex md:flex-row flex-col flex-wrap'>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]" data-aos="fade-up" date-aos-delay="200">
                        <div className="row text-base">
                            <div className="flex flex-col ">
                                <div className="icon-box">
                                    <h4 className=" font-bold tracking-widest text-lg mt-10 mb-5">HUMAN HEART</h4>
                                    <p className="description bg-zinc-700 text-white  rounded-lg p-4">The human heart metaphorically symbolizes emotion, compassion, and empathy in media. It drives narratives, connects characters to audiences, and reflects universal themes of love, resilience, and humanity.</p>
                                </div>
                            </div>
                            <div id="card" className='block my-3 '>
                                <model-viewer
                                    src={mgcms}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>


                            </div>

                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]" data-aos="fade-up" date-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">MRI</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    MRI (Magnetic Resonance Imaging) is a non-invasive medical imaging technique that uses strong magnetic fields and radio waves to generate detailed images of the body's internal structures for diagnosis and treatment planning.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "

                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={hamzatyellow}
                                    ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
                                    poster="logo.png"
                                    alt="mgcms"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate ar>
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">skeleton</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    The skeleton, composed of bones and cartilage, forms the body's framework, providing support, protection for organs, and facilitating movement. It also houses bone marrow, where blood cells are produced.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dgc}
                                    alt="Digital Geiger Counter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>
                   

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[800px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">doctors_stethoscope</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    The doctor's stethoscope is an iconic medical tool used for auscultation, listening to the heart, lungs, and other body sounds. It aids in diagnosing conditions and assessing patients' health status.
                                    </p>
                                </div>
                            </div>
                            <div id="card" className='flex justify-center my-3'>
                                <model-viewer className="text-5xl flex justify-center "
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        backgroundColor: '#70BCD1',
                                        '--poster-color': '#ffffff00',
                                    }}
                                    src={dosi}
                                    alt="Digital Dosimeter"
                                    shadow-intensity="1"
                                    camera-controls
                                    auto-rotate
                                    ar
                                >
                                </model-viewer>
                            </div>
                        </div>
                    </section>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[250px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">AR GAMES LINKS</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    <a href="https://www.instagram.com/ar/832788978890736/?ch=MDBlNzk1M2Y5NDBiYmEwMDIxNGYyYTViOThhMTA3YzQ%3D" onClick={handleClick}>AR GAME 1      </a> 
                                    </p>

                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    <a href="https://www.instagram.com/ar/461810636174297/?ch=ZWFlMTE2YjA3NjE3MTRlZmJiNGM5MjcyOTA0NWRkZWE%3D" onClick={handleClick}>AR GAME 2      </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container max-w-lg bg-slate-600 m-5 px-10 h-[250px]" data-aos="fade-up" data-aos-delay="200">
                        <div className="row">
                            <div className="col-lg-6 d-flex flex-column text-base justify-content-center p-5">
                                <div className="icon-box">
                                    <h4 className="font-bold tracking-widest mt-10 mb-5 text-lg">AR GAMES LINKS</h4>
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    <a href="https://www.instagram.com/ar/1201608624155111/?ch=NGNhNWM2YjFkYmRhNWNlMTU4NzhhOGU0NGQ2ODgzZTg%3D" onClick={handleClick}>AR GAME 3     </a>
                                    </p> 
                                    <p className="description bg-zinc-700 text-white rounded-lg p-4">
                                    <a href="https://www.instagram.com/ar/1724189754772280/?ch=YjVkMDkyOTc3NWZlYjIwYjk1MTNlNzg5ZWJjYmM3NjE%3D" onClick={handleClick}>AR GAME 4     </a>
                                    </p>

                                
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* <a class="flex justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div id="card" className='flex justify-center m-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'>
      <model-viewer src="mgcms.glb"
      ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
      poster="logo.png"
      alt="mgcms"
      shadow-intensity="1"
      camera-controls
      auto-rotate ar>
          </model-viewer>
          
      </div>
      
      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">AR Military Grade Mobile Gas Chromatography</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Mobile GC detectors are the gold standard in chemical analysis. They are a proven necessity widely used by the military and first responders as they rapidly provide on-site specific identification of volatile chemical compounds and agents in the low ppb to the low ppm range.</p>
      </div>
    </a> */}
    <br /><br />
            </div>
        </div>
    )
        ;
};

export default Arlearning;
