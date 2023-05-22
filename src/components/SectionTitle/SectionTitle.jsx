


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-16 ">
            <p className="text-amber-500 mb-3 text-xl">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-4 py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;