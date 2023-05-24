import { Parallax} from 'react-parallax';

const Cover = ({ img, title, description }) => {
    return (
        <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={img}
        bgImageAlt="Our menu"
        strength={300}
    > 
            <div>
                <div className="hero h-[700px] mb-12" >
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 text-xl">{description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;